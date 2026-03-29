const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");

function validateForm() {
    let isValid = true;

    // Name validation
    if (nameInput.value.trim() === "") {
        document.getElementById("nameError").innerText = "Name cannot be empty";
        isValid = false;
    } else {
        document.getElementById("nameError").innerText = "";
    }

    // Email validation
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(pattern)) {
        document.getElementById("emailError").innerText = "Enter valid email";
        isValid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    // Password validation
    if (passwordInput.value.length < 6) {
        document.getElementById("passwordError").innerText = "Minimum 6 characters required";
        isValid = false;
    } else {
        document.getElementById("passwordError").innerText = "";
    }

    // Enable/Disable button
    submitBtn.disabled = !isValid;
}

// Real-time validation
nameInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);
passwordInput.addEventListener("input", validateForm);

// Submit
submitBtn.addEventListener("click", () => {
    alert("Registration Successful!");
});

