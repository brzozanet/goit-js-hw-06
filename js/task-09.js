const textEl = document.querySelector(".color");
const buttonEl = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

function changeColor(event) {
  textEl.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
};

buttonEl.addEventListener("click", changeColor);
