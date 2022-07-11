const DEFAULT_SIZE = 16;

const grid = document.querySelector('#grid');
const gridSizeBtn = document.querySelector('#gridSizeBtn');
const status = document.querySelector('#status');

gridSizeBtn.addEventListener('click', getGridSize);

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function getGridSize() {
    let text;
    let size;
    size = prompt("Enter the number of squares per side for the new grid (from 16 - 100):", "16");
    if (size == null || size == "" || size < 16 || size > 100) {
        DEFAULT_SIZE = 16;
        text = "Using default number of squares: 16.";
    } else {
        text = "Creating a " + size + " by " + size + " grid...";
    }
    document.querySelector('#status').textContent = text;
    grid.innerHTML = '';    // reset grid for generating new one
    createGrid(size);
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