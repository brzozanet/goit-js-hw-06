const DIV_SIZE = 30;
const DIV_INCREMENT = 10;

const numberEl = document.querySelector("input[type='number']");
const createEl = document.querySelector("button[data-create]");
const destroyEl = document.querySelector("button[data-destroy]");
const boxesEl = document.getElementById("boxes");

let box;
let size = DIV_SIZE;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createDiv(event) {
  for (let i = 0; i < numberEl.value; i++) {
    box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesEl.append(box);
    size += DIV_INCREMENT;
  };
};

function destroyDiv(event) {
  numberEl.value = "";
  boxes.innerHTML = "";
  size = DIV_SIZE;
};

createEl.addEventListener("click", createDiv);
destroyEl.addEventListener("click", destroyDiv);
