const field = document.querySelector('#field');

// add event listener to clean-up button
const btn_clean = document.querySelector('#btn_clean');
btn_clean.addEventListener('click', (e) => {
    clearGrid();
});

// add event listener to generate button
const btn_generate = document.querySelector('#btn_generate');
btn_generate.addEventListener('click', (e) => {
    emptyGrid();
    n = document.getElementById("gridsize").value;

    // round-down n to a divider of the total grid size of 512
    d = 2;
    while (2*d<n && 2*d <= 512) {d = 2*d}
    fillGrid(d);
});

// add n squares to the grid
function fillGrid(n) {
    // calculate dimension
    let dim = (512 / n) + "px";

    for (i=1;i<=n*n;i++) {
        const div = document.createElement('div');
        div.classList.add("square")
        div.addEventListener('mouseover', (e) => {
            div.classList.add("hovered")
          });
        field.appendChild(div);
        div.style.width = dim;
        div.style.height = dim;
    }
}

// clear the drawing field
function clearGrid() {
    n = field.childElementCount;
    for (i=1;i<=n;i++) {
        div = field.childNodes[i];
        div.classList.remove("hovered");
    }
}
// clear the drawing field
function emptyGrid() {
    n = field.childElementCount;
    for (i=n;i>=1;i--) {
        div = field.childNodes[i];
        field.removeChild(div);
    }
}