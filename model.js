import Queue from './queue.js';
import Grid from './grid.js';

const rows = 30;
const columns = 20;
const grid = new Grid(rows, columns);
const queue = new Queue();

export function start() {
    console.log("Model started");

    queue.enqueue({ row: 15, column: 9 });
    queue.enqueue({ row: 15, column: 10 });
    queue.enqueue({ row: 15, column: 11 });
}

export function writeToCell(row, column, value) {
    grid.set(row, column, value);
}

export function readFromCell(row, column) {
    return grid.get(row, column);
}

export function dump() {
    grid.dump();
}

export function getQueue() {
    return queue;
}

export function getRows() {
    return grid.getRows();
}

export function getColumns() {
    return grid.getColumns();
}