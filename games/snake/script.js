// Get the canvas element and rendering context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Define the size of each grid cell
const box = 20;

// Initialize variables
let snake = [];
let food;
let score;
let d;
let game;
let boundaryEnabled = false; // Track whether boundaries are enabled
let mobileModeEnabled = false; // Track whether mobile mode is enabled
let gameStarted = false; // Track whether the game has started

// Initialize the game
function init() {
    snake = [];
    snake[0] = { x: 9 * box, y: 10 * box };
    // Set the snake's starting position

    generateFood();
    // Generate food

    score = 0;
    d = null; // Start with no direction
    gameStarted = false; // Keep the game idle during initialization

    document.getElementById('score').innerText = score;
    // Update the score display

    document.getElementById('restartButton').style.display = 'none';
    // Hide the restart button

    document.getElementById('boundarySwitch').parentElement.style.display = 'block';
    document.getElementById('mobileSwitch').parentElement.style.display = 'block';
    // Show the boundary and mobile mode switches

    if (game) clearInterval(game);
    game = setInterval(draw, mobileModeEnabled ? 200 : 150);
    // Set the game loop speed based on mobile mode
}

// Listen for keyboard input
document.addEventListener('keydown', direction);

// Update the direction
function direction(event) {
    let key = event.keyCode;
    if (!gameStarted) {
        gameStarted = true; // Start the game when a direction key is pressed
        document.getElementById('boundarySwitch').parentElement.style.display = 'none';
        document.getElementById('mobileSwitch').parentElement.style.display = 'none';
        // Hide the boundary and mobile mode switches

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
    // Set the direction from keyboard input and prevent reversing
}

// Move the snake using mobile controls
function moveSnake(direction) {
    if (!gameStarted) {
        gameStarted = true; // Start the game when a direction button is pressed
        document.getElementById('boundarySwitch').parentElement.style.display = 'none';
        document.getElementById('mobileSwitch').parentElement.style.display = 'none';
        // Hide the boundary and mobile mode switches

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
    // Set the direction from button input and prevent reversing
}

// Update button states
function updateButtonStates() {
    document.getElementById('upKey').disabled = d === 'DOWN';
    document.getElementById('downKey').disabled = d === 'UP';
    document.getElementById('leftKey').disabled = d === 'RIGHT';
    document.getElementById('rightKey').disabled = d === 'LEFT';
}

// Toggle mobile mode
function toggleMobileMode() {
    mobileModeEnabled = document.getElementById('mobileSwitch').checked;
    document.getElementById('mobileControls').style.display = mobileModeEnabled ? 'block' : 'none';
    // Show or hide virtual buttons based on mobile mode
    document.removeEventListener('keydown', direction); // Remove the keyboard listener
    if (!mobileModeEnabled) {
        document.addEventListener('keydown', direction); // Restore the keyboard listener outside mobile mode
    }
    init();
    // Reinitialize the game to apply the new speed and controls
}

// Toggle boundaries
function toggleBoundary() {
    boundaryEnabled = document.getElementById('boundarySwitch').checked;
}

// Draw the game
function draw() {
    // Clear the canvas
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the snake
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = (i === 0) ? '#00FF00' : '#FFFFFF';
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        ctx.strokeStyle = '#000';
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }

    // Draw the food
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(food.x, food.y, box, box);

    // Keep the snake still until the game starts
    if (!gameStarted || d === null) return;

    // Get the current position of the snake's head
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // Move the snake's head in the current direction
    if (d === 'LEFT') snakeX -= box;
    if (d === 'UP') snakeY -= box;
    if (d === 'RIGHT') snakeX += box;
    if (d === 'DOWN') snakeY += box;

    // Handle wrapping or boundary collisions
    if (boundaryEnabled) {
        // End the game if the snake hits a wall while boundaries are enabled
        if (snakeX < 0 || snakeX >= canvas.width || snakeY < 0 || snakeY >= canvas.height) {
            clearInterval(game);
            document.getElementById('restartButton').style.display = 'block';
            document.getElementById('boundarySwitch').parentElement.style.display = 'block';
            document.getElementById('mobileSwitch').parentElement.style.display = 'block';
            return;
        }
    } else {
        // Wrap to the opposite edge when boundaries are disabled
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

    // Check whether the snake has eaten the food
    if (snakeX === food.x && snakeY === food.y) {
        score++;
        document.getElementById('score').innerText = score;
        generateFood();
        // Generate new food
    } else {
        snake.pop();
        // Remove the snake's tail
    }

    // Create the new head
    let newHead = {
        x: snakeX,
        y: snakeY
    };

    // Check whether the snake has collided with itself
    if (collision(newHead, snake)) {
        clearInterval(game);
        document.getElementById('restartButton').style.display = 'block';
        document.getElementById('boundarySwitch').parentElement.style.display = 'block';
        document.getElementById('mobileSwitch').parentElement.style.display = 'block';
        // Show the boundary and mobile mode switches
        return;
    }

    snake.unshift(newHead);
    // Add the new head to the snake's body
    if (mobileModeEnabled) {
        updateButtonStates(); // Update button states
    }
}

// Check for collisions
function collision(head, array) {
    for (let i = 0; i < array.length; i++) {
        if (head.x === array[i].x && head.y === array[i].y) {
            return true;
        }
    }
    return false;
}

// Generate food
function generateFood() {
    let validPosition = false;
    while (!validPosition) {
        food = {
            x: Math.floor(Math.random() * 19 + 1) * box,
            y: Math.floor(Math.random() * 19 + 1) * box
        };
        validPosition = !collision(food, snake);
        // Ensure food does not appear on the snake's body
    }
}

// Restart the game
function restartGame() {
    init();
}

// Initialize
init();
