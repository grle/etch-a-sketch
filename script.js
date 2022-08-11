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
    row.style.backgroundColor = "#FFFFFF";
    row.addEventListener("mouseover", (event) => {
      draw(row);
    });
    container.appendChild(row).className = "grid-item";
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
let boolBrush = true;
let boolEraser = false;
let boolShade = false;
let boolPsyche = false;
let boolColorPick = false;

function draw(cell) {
  if (boolBrush == true) {
    cell.style.backgroundColor = "#808080";
  }
  else if (boolEraser == true) {
    cell.style.backgroundColor = "#FFFFFF";
  }
  // else if (boolShade == true) {
  // }
  else if (boolPsyche == true) {
    let psycheHex = pastelHex();
    cell.style.backgroundColor = psycheHex;
  }
  else {
    console.log("error");
  }
}

function mainBrush() {
  boolBrush = true;
  boolPsyche = false;
  boolShade = false;
  boolEraser = false;
}

function psychedelic() {
  boolBrush = false;
  boolPsyche = true;
  boolShade = false;
  boolEraser = false;
}

function shading() {
  boolBrush = false;
  boolPsyche = false;
  boolShade = true;
  boolEraser = false;
}

function eraser() {
  boolBrush = false;
  boolPsyche = false;
  boolShade = false;
  boolEraser = true;
}

function pastelHex() {
  let num = Math.floor(Math.random() * 6); //generate number 0-5
  if (num == 0) {
    return "#FFF9CA"; //yellow
  }
  if (num == 1) {
    return "#FFDEB4"; //orange
  }
  if (num == 2) {
    return "#FFB4B4"; //red
  }
  if (num == 3) {
    return "#B2A4FF"; //purple
  }
  if (num == 4) {
    return "#C1EFFF"; //blue
  }
  if (num == 5) {
    return "#CFE8A9"; //green
  }
}

function darkenTen(rgb) {
  //fill this in later
}

function clearMe() {
  const total = document.querySelectorAll(".grid-item");
  total.forEach(item => {
    item.style.backgroundColor = "white";
  });
}
