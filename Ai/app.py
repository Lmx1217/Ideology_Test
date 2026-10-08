from flask import Flask, request, jsonify
import subprocess
import logging

app = Flask(__name__)

# 设置日志
logging.basicConfig(level=logging.DEBUG)

@app.route('/')
def home():
    return app.send_static_file('index.html')

@app.route('/ask', methods=['POST'])
def ask():
    data = request.json
    prompt = data['prompt']
    
    try:
        # 使用 subprocess 调用 ollama
        result = subprocess.run(['ollama', 'run', 'gemma2:9b', prompt], 
                                capture_output=True, text=True, timeout=60)
        
        if result.returncode != 0:
            raise Exception(f"Ollama command failed: {result.stderr}")
        
        return jsonify({"response": result.stdout.strip()})
    
    except subprocess.TimeoutExpired:
        app.logger.error("Ollama process timed out")
        return jsonify({"error": "Model response timed out"}), 500
    
    except Exception as e:
        app.logger.error(f"Error: {str(e)}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)