const inputEl = document.getElementById("validation-input");

const inputCheck = () => {
    if (inputEl.ariaValueMax.length === Number(input.dataset.length)) {
        inputEl.className = "valid";
    } else inputEl.className = "invalid";
};

inputEl.addEventListener("focus", inputCheck);
