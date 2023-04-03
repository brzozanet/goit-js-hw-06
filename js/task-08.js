const formEl = document.querySelector(".login-form");
let userData = {};

const sendForm = (event) => {
    event.preventDefault();
    const {elements: {email, password}} = event.currentTarget;

    if (email.value === "" || password.value === "") {
        alert("Proszę wypełnić wszystkie pola formularza.")
    } else {
        userData = {email: `${email.value}`, password: `${password.value}`};
        console.log(userData);
        event.currentTarget.reset();
    };
};

formEl.addEventListener("submit", sendForm);
