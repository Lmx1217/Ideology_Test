// 获取画布元素和上下文
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// 定义每个方块的大小
const box = 20;

// 初始化变量
let snake = [];
let food;
let score;
let d;
let game;
let boundaryEnabled = false; // 用于表示边界是否开启
let mobileModeEnabled = false; // 用于表示手机模式是否开启
let gameStarted = false; // 用于表示游戏是否开始

// 初始化游戏
function init() {
    snake = [];
    snake[0] = { x: 9 * box, y: 10 * box };
    // 初始化蛇的初始位置

    generateFood();
    // 生成食物

    score = 0;
    d = null; // 初始化方向为空
    gameStarted = false; // 初始化时游戏未开始

    document.getElementById('score').innerText = score;
    // 更新分数显示

    document.getElementById('restartButton').style.display = 'none';
    // 隐藏重新开始按钮

    document.getElementById('boundarySwitch').parentElement.style.display = 'block';
    document.getElementById('mobileSwitch').parentElement.style.display = 'block';
    // 显示边界开关和手机模式开关

    if (game) clearInterval(game);
    game = setInterval(draw, mobileModeEnabled ? 200 : 150);
    // 设置游戏循环，根据手机模式调整速度
}

// 监听键盘按键事件
document.addEventListener('keydown', direction);

// 更新方向
function direction(event) {
    let key = event.keyCode;
    if (!gameStarted) {
        gameStarted = true; // 按下方向键后游戏开始
        document.getElementById('boundarySwitch').parentElement.style.display = 'none';
        document.getElementById('mobileSwitch').parentElement.style.display = 'none';
        // 隐藏边界开关和手机模式开关

        if (key === 37) {
            d = 'LEFT';
        } else if (key === 38) {
            d = 'UP';
        } else if (key === 39) {
            d = 'RIGHT';
        } else if (key === 40) {
            d = 'DOWN';
        }
    } else {
        if (key === 37 && d !== 'RIGHT') {
            d = 'LEFT';
        } else if (key === 38 && d !== 'DOWN') {
            d = 'UP';
        } else if (key === 39 && d !== 'LEFT') {
            d = 'RIGHT';
        } else if (key === 40 && d !== 'UP') {
            d = 'DOWN';
        }
    }
    // 根据按键设置方向，防止蛇反向移动
}

// 移动蛇（手机模式下使用）
function moveSnake(direction) {
    if (!gameStarted) {
        gameStarted = true; // 按下方向键后游戏开始
        document.getElementById('boundarySwitch').parentElement.style.display = 'none';
        document.getElementById('mobileSwitch').parentElement.style.display = 'none';
        // 隐藏边界开关和手机模式开关

        d = direction;
    } else {
        if (direction === 'LEFT' && d !== 'RIGHT') {
            d = 'LEFT';
        } else if (direction === 'UP' && d !== 'DOWN') {
            d = 'UP';
        } else if (direction === 'RIGHT' && d !== 'LEFT') {
            d = 'RIGHT';
        } else if (direction === 'DOWN' && d !== 'UP') {
            d = 'DOWN';
        }
    }
    updateButtonStates();
    // 根据按键设置方向，防止蛇反向移动
}

// 更新按钮状态
function updateButtonStates() {
    document.getElementById('upKey').disabled = d === 'DOWN';
    document.getElementById('downKey').disabled = d === 'UP';
    document.getElementById('leftKey').disabled = d === 'RIGHT';
    document.getElementById('rightKey').disabled = d === 'LEFT';
}

// 切换手机模式
function toggleMobileMode() {
    mobileModeEnabled = document.getElementById('mobileSwitch').checked;
    document.getElementById('mobileControls').style.display = mobileModeEnabled ? 'block' : 'none';
    // 根据手机模式的状态显示或隐藏虚拟按钮
    document.removeEventListener('keydown', direction); // 移除键盘事件监听
    if (!mobileModeEnabled) {
        document.addEventListener('keydown', direction); // 如果不是手机模式，重新添加键盘事件监听
    }
    init();
    // 重新初始化游戏以应用新的速度和控制方式
}

// 切换边界状态
function toggleBoundary() {
    boundaryEnabled = document.getElementById('boundarySwitch').checked;
}

// 绘制游戏
function draw() {
    // 清空画布
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 绘制蛇
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = (i === 0) ? '#00FF00' : '#FFFFFF';
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        ctx.strokeStyle = '#000';
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }

    // 绘制食物
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(food.x, food.y, box, box);

    // 如果游戏未开始，则不移动蛇
    if (!gameStarted || d === null) return;

    // 获取蛇头的当前位置
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // 根据方向移动蛇头
    if (d === 'LEFT') snakeX -= box;
    if (d === 'UP') snakeY -= box;
    if (d === 'RIGHT') snakeX += box;
    if (d === 'DOWN') snakeY += box;

    // 实现穿墙逻辑或边界碰撞逻辑
    if (boundaryEnabled) {
        // 边界开启时，蛇撞到墙壁则死亡
        if (snakeX < 0 || snakeX >= canvas.width || snakeY < 0 || snakeY >= canvas.height) {
            clearInterval(game);
            document.getElementById('restartButton').style.display = 'block';
            document.getElementById('boundarySwitch').parentElement.style.display = 'block';
            document.getElementById('mobileSwitch').parentElement.style.display = 'block';
            return;
        }
    } else {
        // 边界关闭时，蛇撞到墙壁从另一边出现
        if (snakeX < 0) {
            snakeX = canvas.width - box;
        } else if (snakeX >= canvas.width) {
            snakeX = 0;
        }
        if (snakeY < 0) {
            snakeY = canvas.height - box;
        } else if (snakeY >= canvas.height) {
            snakeY = 0;
        }
    }

    // 检查蛇是否吃到食物
    if (snakeX === food.x && snakeY === food.y) {
        score++;
        document.getElementById('score').innerText = score;
        generateFood();
        // 生成新的食物
    } else {
        snake.pop();
        // 移除蛇尾
    }

    // 创建新的蛇头
    let newHead = {
        x: snakeX,
        y: snakeY
    };

    // 检查蛇是否撞到自己
    if (collision(newHead, snake)) {
        clearInterval(game);
        document.getElementById('restartButton').style.display = 'block';
        document.getElementById('boundarySwitch').parentElement.style.display = 'block';
        document.getElementById('mobileSwitch').parentElement.style.display = 'block';
        // 显示边界开关和手机模式开关
        return;
    }

    snake.unshift(newHead);
    // 添加新的蛇头到蛇身上
    if (mobileModeEnabled) {
        updateButtonStates(); // 更新按钮状态
    }
}

// 检查碰撞
function collision(head, array) {
    for (let i = 0; i < array.length; i++) {
        if (head.x === array[i].x && head.y === array[i].y) {
            return true;
        }
    }
    return false;
}

// 生成食物
function generateFood() {
    let validPosition = false;
    while (!validPosition) {
        food = {
            x: Math.floor(Math.random() * 19 + 1) * box,
            y: Math.floor(Math.random() * 19 + 1) * box
        };
        validPosition = !collision(food, snake);
        // 确保食物不生成在蛇身上
    }
}

// 重新开始游戏
function restartGame() {
    init();
}

// 初始化
init();
