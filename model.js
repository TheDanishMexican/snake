import Queue from './queue.js';

const model = createModel(20, 20);
const queue = new Queue();

export function start() {
    console.log("Model started");

    queue.enqueue({ row: 9, column: 9 });
    queue.enqueue({ row: 9, column: 10 });
    queue.enqueue({ row: 9, column: 11 });
}

export function createModel(rows, columns) {
    const grid = [];

    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < columns; j++) {
            row.push(0);
        }
        grid.push(row);
    }

    return grid;
}

export function writeToCell(row, column, value) {
    model[row][column] = value;
}

export function readFromCell(row, column) {
    return model[row][column];
}

export function dump() {
    console.table(model);
}

export function getQueue() {
    return queue;
}