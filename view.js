import * as controller from './controller.js';

export function start(rows, columns) {
    console.log('View started');
    makeGrid(rows, columns);
}

export function makeGrid(rows, columns) {
    const table = document.querySelector(".grid-container");

    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < columns; j++) {
            const td = document.createElement('td');
            td.dataset.row = i;
            td.dataset.column = j;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}