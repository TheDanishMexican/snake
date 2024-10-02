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

export function displayBoard(model) {
    const cells = document.querySelectorAll(".grid-container td");

    for (let row = 0; row < 20; row++) {
        for (let column = 0; column < 20; column++) {
            const index = row * 20 + column;

            switch (model.readFromCell(row, column)) {
                case 0:
                    cells[index].classList.remove("snake", "food");
                    break;
                case 1:
                    cells[index].classList.add("snake");
                    break;
                case 2:
                    cells[index].classList.add("food");
                    break;
            }
        }
    }
}
