const http = require('node:http');
const fs = require('node:fs');
const fsp = require('node:fs/promises');
const path = require('node:path');
const { randomUUID } = require('node:crypto');

const MAX_BODY_BYTES = 32 * 1024;
const MAX_TEXT_LENGTH = 5000;
const contentTypes = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.webp': 'image/webp'
};

function sendJson(response, status, value) {
    response.writeHead(status, {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'no-store',
        'X-Content-Type-Options': 'nosniff'
    });
    response.end(JSON.stringify(value));
}

function readJson(request) {
    return new Promise((resolve, reject) => {
        const chunks = [];
        let size = 0;
        request.on('data', chunk => {
            size += chunk.length;
            if (size > MAX_BODY_BYTES) {
                chunks.length = 0;
                reject(Object.assign(new Error('Request too large'), { status: 413 }));
            } else {
                chunks.push(chunk);
            }
        });
        request.on('end', () => {
            if (size > MAX_BODY_BYTES) return;
            try {
                resolve(JSON.parse(Buffer.concat(chunks).toString('utf8')));
            } catch {
                reject(Object.assign(new Error('Invalid JSON'), { status: 400 }));
            }
        });
        request.on('error', reject);
    });
}

function isPublicFile(relativePath) {
    const segments = relativePath.split(path.sep);
    return relativePath && !path.isAbsolute(relativePath)
        && !segments.some(segment => segment.startsWith('.'))
        && segments[0].toLowerCase() !== 'feedback'
        && Object.hasOwn(contentTypes, path.extname(relativePath).toLowerCase());
}

function createServer({ directory = __dirname } = {}) {
    const root = fs.realpathSync(directory);
    const feedbackDirectory = path.join(root, 'feedback');

    return http.createServer(async (request, response) => {
        try {
            // The local service accepts only its own browser origin.
            const port = request.socket.localPort;
            const allowedHosts = [`localhost:${port}`, `127.0.0.1:${port}`, `[::1]:${port}`];
            if (!allowedHosts.includes(request.headers.host)) {
                return sendJson(response, 403, { error: 'Invalid host' });
            }
            const url = new URL(request.url, `http://${request.headers.host}`);
            if (url.pathname === '/api/feedback') {
                if (request.method !== 'POST') {
                    response.setHeader('Allow', 'POST');
                    return sendJson(response, 405, { error: 'Use POST' });
                }
                if ((request.headers.origin && request.headers.origin !== url.origin)
                    || request.headers['sec-fetch-site'] === 'cross-site') {
                    return sendJson(response, 403, { error: 'Invalid origin' });
                }
                if (request.headers['content-type']?.split(';')[0].trim().toLowerCase() !== 'application/json') {
                    return sendJson(response, 415, { error: 'Use application/json' });
                }
                const body = await readJson(request);
                if (!body || typeof body.text !== 'string' || !body.text.trim()
                    || body.text.length > MAX_TEXT_LENGTH) {
                    return sendJson(response, 400, { error: 'Feedback must contain 1–5000 characters' });
                }

                await fsp.mkdir(feedbackDirectory, { recursive: true });
                const filename = `${new Date().toISOString().replace(/[:.]/g, '-')}_${randomUUID()}.txt`;
                await fsp.writeFile(path.join(feedbackDirectory, filename), body.text.trim() + '\n', {
                    encoding: 'utf8', flag: 'wx', mode: 0o600
                });
                return sendJson(response, 201, { saved: true });
            }

            if (!['GET', 'HEAD'].includes(request.method)) {
                response.setHeader('Allow', 'GET, HEAD');
                return sendJson(response, 405, { error: 'Method not allowed' });
            }
            let pathname;
            try {
                pathname = decodeURIComponent(url.pathname);
            } catch {
                return sendJson(response, 400, { error: 'Invalid URL' });
            }
            if (pathname.includes('\0')) return sendJson(response, 400, { error: 'Invalid URL' });
            if (pathname.endsWith('/')) pathname += 'index.html';
            const relativePath = pathname.slice(1);
            if (!isPublicFile(relativePath)) return sendJson(response, 404, { error: 'Not found' });
            // Resolve symlinks before checking that the file is public and inside the project.
            const filename = await fsp.realpath(path.resolve(root, relativePath));
            if (!isPublicFile(path.relative(root, filename))) {
                return sendJson(response, 404, { error: 'Not found' });
            }
            const content = await fsp.readFile(filename);
            response.writeHead(200, {
                'Content-Type': contentTypes[path.extname(filename).toLowerCase()],
                'Content-Length': content.length,
                'Cache-Control': 'no-cache',
                'X-Content-Type-Options': 'nosniff'
            });
            response.end(request.method === 'HEAD' ? undefined : content);
        } catch (error) {
            if (['ENOENT', 'ENOTDIR', 'EISDIR'].includes(error.code) && request.method !== 'POST') {
                return sendJson(response, 404, { error: 'Not found' });
            }
            const status = error.status || 500;
            if (status === 500) console.error('Request failed:', error.code || error.message);
            sendJson(response, status, { error: status === 500 ? 'Unable to save or serve the request' : error.message });
        }
    });
}

if (require.main === module) {
    const port = Number(process.env.PORT || 3000);
    const server = createServer();
    server.on('error', error => {
        console.error('本地服务启动失败：', error.message);
        process.exitCode = 1;
    });
    server.listen(port, '127.0.0.1', () => {
        console.log(`打开网站：http://127.0.0.1:${server.address().port}/?lang=zh`);
        console.log(`反馈保存位置：${path.join(__dirname, 'feedback')}`);
    });
}

module.exports = { createServer };
