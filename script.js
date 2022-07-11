const grid = document.querySelector('#grid');
const gridSizeBtn = document.querySelector('#gridSizeBtn');
//const status = document.querySelector('#status');

gridSizeBtn.addEventListener('click', getGridSize);

let size = 16;  // default grid height and width size

function getGridSize() {
    let text;
    size = prompt("Enter the number of squares per side for the new grid (from 16 - 100):", "16");
    if (size == null || size == "" || size < 16 || size > 100) {
        size = 16;
        text = "Using default number of squares: 16.";
    } else {
        text = "Creating new grid with " + size + " squares per side...";
    }
    document.querySelector('#status').textContent = text;
    grid.innerHTML = '';
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
    e.target.style.backgroundColor = "#000000";
}

createGrid(size);