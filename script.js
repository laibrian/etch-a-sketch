const DEFAULT_SIZE = 16;

let size =  DEFAULT_SIZE;

const grid = document.querySelector('#grid');
const gridSizeBtn = document.querySelector('#gridSizeBtn');
const clearBtn = document.querySelector('#clearBtn');
const status = document.querySelector('#status');

clearBtn.onclick = () => resetGrid();

gridSizeBtn.addEventListener('click', getGridSize);

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function resetGrid() {
    grid.innerHTML = '';
    createGrid(size);
}

function getGridSize() {
    let text;
    size = prompt("Enter the number of squares per side for the new grid (from 16 - 100):", "16");
    if (size == null || size == "" || size < 16 || size > 100) {
        text = "Invalid size input! Creating default 16 x 16 grid.";
        size = DEFAULT_SIZE;
    } else {
        text = "Creating a " + size + " x " + size + " grid...";
    }
    document.querySelector('#status').textContent = text;
    resetGrid(size);
}

function createGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', changeColor);
        square.addEventListener('mousedown', changeColor);
        grid.appendChild(square);
    }
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    e.target.style.backgroundColor = "#000000";
}

createGrid(DEFAULT_SIZE);