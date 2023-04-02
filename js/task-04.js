const buttonUpEl = document.querySelector("button[data-action='increment']");
const buttonDownEl = document.querySelector("button[data-action='decrement']");
const buttonResetEl = document.querySelector("button[data-action='reset']");
const valueEl = document.getElementById("value");
let counterValue = 0;

buttonUpEl.addEventListener("click", (event) => {
    counterValue++;
    valueEl.textContent = counterValue;
});

buttonDownEl.addEventListener("click", (event) => {
  counterValue--;
  valueEl.textContent = counterValue;
});

buttonResetEl.addEventListener("click", (event) => {
  counterValue = 0;
  valueEl.textContent = counterValue;
});
