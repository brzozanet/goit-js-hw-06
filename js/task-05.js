const inputEl = document.getElementById("name-input");
const outputEl = document.getElementById("name-output");

// inputEl.addEventListener("input", (event) => {
//     if (inputEl == "") {
//         outputEl.textContent = "Anonymous";
//     } else {
//         outputEl.textContent = inputEl.value;
//     };
// });

inputEl.addEventListener("input", (event) => {
  if (event.currentTarget.value) {
    outputEl.textContent = event.currentTarget.value;
  } else {
    outputEl.textContent = "Anonymous";
  }
});