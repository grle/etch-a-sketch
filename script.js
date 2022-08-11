let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
const container = document.getElementById("sketch-pad");

// SLIDER
// default slider value
output.innerHTML = slider.value + "x" + slider.value;
// current slider value
slider.oninput = function() {
  clearGrid(slider.value);
  output.innerHTML = this.value + "x" + this.value;
  myGrid(this.value);
}

//GRID
function myGrid(num) {
  let dimension = num * num;
  //row
  for (let i = 0; i < dimension; i++) {
    let row = document.createElement("div");
    row.addEventListener('mouseover', (event) => {
      draw(row);
    });
    container.appendChild(row).className = "grid-item base";
  }
  //column
  container.style.setProperty("grid-template-columns", `repeat(${num},1fr)`);
}

function clearGrid() {
  const total = document.querySelectorAll(".grid-item");
  total.forEach(item => {
    item.remove();
  });
}

myGrid(slider.value);

//DRAWING
function draw(cell) {
  cell.classList.add("hold");
}

function eraser() {

}

function clearMe() {
  const total = document.querySelectorAll(".grid-item");
  total.forEach(item => {
    item.classList.remove("hold");
    item.classList.add("base");
  });
}

const brush = document.getElementById("brush");

brush.addEventListener("click", function onClick(event) {
  //color select
});
