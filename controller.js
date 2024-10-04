import * as model from './model.js';
import * as view from './view.js';

window.addEventListener("load", start);

let currentDirection = 'right';
let nextDirection = currentDirection;

export function start() {
    window.view = view;
    window.model = model;

    console.log("Controller started");
    model.start();
    view.start(20, 20);

    const queue = getQueue();
    let current = queue.head;

    while (current) {
        writeToCell(current.data.row, current.data.column, 1);
        current = current.next;
    }

    displayBoard(model);

    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowDown':
                if (currentDirection !== 'up') {
                    nextDirection = 'down';
                }
                break;
            case 'ArrowUp':
                if (currentDirection !== 'down') {
                    nextDirection = 'up';
                }
                break;
            case 'ArrowLeft':
                if (currentDirection !== 'right') {
                    nextDirection = 'left';
                }
                break;
            case 'ArrowRight':
                if (currentDirection !== 'left') {
                    nextDirection = 'right';
                }
                break;
        }
    });

    document.querySelector(".start-button").addEventListener('click', startGame);


}

export function startGame() {
    setInterval(tick, 500);
    document.querySelector(".start-button").removeEventListener('click', startGame);
}

export function getQueue() {
    return model.getQueue();
}

export function tick() {
    currentDirection = nextDirection;

    const queue = getQueue();

    const snakeHead = queue.tail;
    let current = queue.head;
    let newSnakeHead = { row: snakeHead.data.row, column: snakeHead.data.column };

    while (current) {
        writeToCell(current.data.row, current.data.column, 0);
        current = current.next;
    }

    switch (currentDirection) {
        case 'left':
            newSnakeHead.column--;
            if (newSnakeHead.column < 0) newSnakeHead.column = 19;
            break;
        case 'right':
            newSnakeHead.column++;
            if (newSnakeHead.column > 19) newSnakeHead.column = 0;
            break;
        case 'up':
            newSnakeHead.row--;
            if (newSnakeHead.row < 0) newSnakeHead.row = 19;
            break;
        case 'down':
            newSnakeHead.row++;
            if (newSnakeHead.row > 19) newSnakeHead.row = 0;
            break;
    }

    queue.enqueue(newSnakeHead);
    queue.dequeue();

    current = queue.head;

    while (current) {
        writeToCell(current.data.row, current.data.column, 1);
        current = current.next;
    }

    displayBoard(model);
}


export function displayBoard(model) {
    view.displayBoard(model);
}

export function writeToCell(row, column, value) {
    model.writeToCell(row, column, value);
}
