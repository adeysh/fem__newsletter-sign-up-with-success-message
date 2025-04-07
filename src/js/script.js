const card = document.querySelector(".card");
const cardSuccess = document.querySelector(".card--success");
const buttonDismiss = document.getElementById("dismiss");
const emailEl = document.getElementById("email");
const emailSuccessEl = document.getElementById("bold");
const errorEl = document.getElementById("error");
const footerEl = document.querySelector(".attribution");
const form = document.getElementById("form");
const formSuccessEl = document.querySelector(".card__form-message");


function isEmail(email) {
    return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(email);
}

const toggleHiddenClass = () => {
    card.classList.toggle("hidden");
    cardSuccess.classList.toggle("hidden");
}

const renderFormMessage = (message) => {
    formSuccessEl.textContent = message;
}

const renderError = (message) => {
    errorEl.textContent = message;
}

function toggleErrorClass(isError) {
    emailEl.classList.toggle("error-input", isError);
}

const dataIsValid = (data) => {
    const email = data["email"];
    let isError = false;

    if (email === "") {
        renderError("Email Should be provided.");
        isError = true;
        toggleErrorClass(isError);
        return false
    } else if (isEmail(email)) {
        toggleErrorClass(isError);
        toggleHiddenClass();
        formSuccessEl.classList.toggle("hidden");
        renderError("");
        emailSuccessEl.textContent = email;
        return true
    } else {
        renderError("Valid email required!");
        isError = true;
        toggleErrorClass(isError);
        return false
    }
}

const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const isValid = dataIsValid(data);
    if (!isValid) {
        formSuccessEl.classList.toggle("hidden");
        formSuccessEl.classList.toggle("error-input");
        renderFormMessage("Form data is invalid!");
    }
};

buttonDismiss.addEventListener("click", toggleHiddenClass);
form.addEventListener("submit", handleSubmit);