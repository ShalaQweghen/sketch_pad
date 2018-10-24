const normalHandler = (event) => {
  event.target.setAttribute("style", `background-color: ${color};`);
}

const normalMouseDownHandler = (event) => {
  grids.forEach((grid) => grid.addEventListener("mouseenter", normalHandler));
}

const normalMouseUpHandler = (event) => {
  grids.forEach((grid) => grid.removeEventListener("mouseenter", normalHandler));
}

const randomHandler = (event) => {
  let getRandomColor = () => {
    let r = () => Math.floor(Math.random() * 256);

    return `rgb(${r()},${r()},${r()})`;
  }

  event.target.classList.add("random");
  event.target.setAttribute("style", `background-color: ${getRandomColor()};`);
}

const randomMouseDownHandler = (event) => {
  grids.forEach((grid) => grid.addEventListener("mouseenter", randomHandler));
}

const randomMouseUpHander = (event) => {
  grids.forEach((grid) => grid.removeEventListener("mouseenter", randomHandler));
}

const clear = () => {
  container.removeEventListener("mousedown", normalMouseDownHandler);
  container.removeEventListener("mouseup", normalMouseUpHandler);
  container.removeEventListener("mousedown", randomMouseDownHandler);
  container.removeEventListener("mouseup", randomMouseUpHander);

  grids.forEach((grid) => {
    grid.removeAttribute("style");
    grid.classList.remove("random");
  });
}

const set = () => {
  clear();

  let num = prompt("How many squares per side should the grid have?");
  let width = 576 / num;
  let quantity = num * num;

  container.innerHTML = "";

  for (let i = 0; i < quantity; i++) {
    let grid = document.createElement("div");
    grid.classList.add("grid");
    container.appendChild(grid);
  }

  grids = Array.from(document.querySelectorAll(".grid"));

  grids.forEach((grid) => grid.setAttribute("style", `width: ${width}px; height: ${width}px;`))

  normal();
}

const normal = () => {
  clear();

  colorPick.value = "#0000ff";
  color = "#0000ff";

  container.addEventListener("mousedown", normalMouseDownHandler);
  container.addEventListener("mouseup", normalMouseUpHandler);
}

const random = () => {
  clear();

  container.addEventListener("mousedown", randomMouseDownHandler);
  container.addEventListener("mouseup", randomMouseUpHander);
}

const opacity = () => {
  clear();
}

const container = document.querySelector("#container");
const colorPick = document.querySelector("#color");
const resetButton = document.querySelector("#reset");
const randomButton = document.querySelector("#random");
const defaultButton = document.querySelector("#default");

let color = "#0000ff";

for (let i = 0; i < 324; i++) {
  let div = document.createElement("div");
  div.classList.add("grid");
  container.appendChild(div);
}

let grids = Array.from(document.querySelectorAll(".grid"));

normal();

resetButton.addEventListener("click", set);
randomButton.addEventListener("click", random);
defaultButton.addEventListener("click", normal);
colorPick.addEventListener("change", (event) => {
  if (!grids.some((grid) => grid.classList.contains("random"))) {
    console.log("1")
    color = event.target.value;
  }
})