import * as model from "./model.js";
import * as view from "./view.js";

window.addEventListener("load", start);

let direction = 'left';
const rows = 20;
const columns = 20;
const player = {
    row: 9,
    col: 9
};

function start() {
    console.log("Controller started");
    model.start();
    view.start(20, 20);
    window.view = view;
    window.model = model;

    writeToCell(player.row, player.col, 1);
    displayBoard(model);

    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowDown':
                direction = 'down';

                break;
            case 'ArrowUp':
                direction = 'up';
                break;
            case 'ArrowLeft':
                direction = 'left';
                break;
            case 'ArrowRight':
                direction = 'right';
                break;
        }
        tick();
    });
}

export function displayBoard(model) {
    view.displayBoard(model);
}

export function tick() {

    writeToCell(player.row, player.col, 0);

    movePlayer();

    writeToCell(player.row, player.col, 1);

    displayBoard(model);

    console.log(player);
}

export function writeToCell(row, column, value) {
    model.writeToCell(row, column, value);
}

function movePlayer() {
    switch (direction) {
        case 'left':
            player.col--;
            if (player.col < 0) {
                player.col = columns - 1;
            }
            break;
        case 'right':
            player.col++;
            if (player.col > columns - 1) {
                player.col = 0;
            }
            break;
        case 'up':
            player.row--;
            if (player.row < 0) {
                player.row = rows - 1;
            }
            break;
        case 'down':
            player.row++;
            if (player.row > rows - 1) {
                player.row = 0;
            }
    }
}