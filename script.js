const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const btn = document.getElementById("btn");

function validate() {
  let valid = true;

  if (nameInput.value.trim() === "") valid = false;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) valid = false;

  if (passwordInput.value.length < 6) valid = false;

  btn.disabled = !valid;
  btn.classList.toggle("active", valid);
}

nameInput.addEventListener("input", validate);
emailInput.addEventListener("input", validate);
passwordInput.addEventListener("input", validate);

document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Welcome to the E-Book Library!");
});


