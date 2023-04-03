const slideEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

slideEl.addEventListener("input", (event) => {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
});
