const card = document.querySelector(".card");
const cardSuccess = document.querySelector(".card--success");
const buttonDismiss = document.getElementById("dismiss");
const emailEl = document.getElementById("email");
const emailSuccessEl = document.getElementById("bold");
const errorEl = document.getElementById("error");
const footerEl = document.querySelector(".attribution");
const form = document.getElementById("form");


function isEmail(email) {
    return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(email);
}

const toggleHiddenClass = () => {
    card.classList.toggle("hidden");
    cardSuccess.classList.toggle("hidden");
}

const handleSubmit = (e) => {
    e.preventDefault(e);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    if (data['email'] === "") {
        errorEl.textContent = "Email Should be provided.";
    } else if (isEmail(data['email'])) {
        emailEl.classList.remove("error-input");
        toggleHiddenClass();
        emailSuccessEl.textContent = data['email'];
    } else {
        errorEl.textContent = "Valid email required";
        console.log(emailEl);
        emailEl.classList.add("error-input");
    }
};

buttonDismiss.addEventListener("click", toggleHiddenClass);

form.addEventListener("submit", handleSubmit);