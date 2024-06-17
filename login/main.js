const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

emailInput.addEventListener("blur", validateEmailField);
emailInput.addEventListener("input", validateEmailField);
passwordInput.addEventListener("blur", validatePasswordField);
passwordInput.addEventListener("input", validatePasswordField);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const isEmailValid = validateEmailField();
  const isPasswordValid = validatePasswordField();

  if (isEmailValid && isPasswordValid) {
    const isAuthenticated = verifyLogin();
    if (isAuthenticated) {
      alert("Login realizado com sucesso!");
      window.location.href = "/index.html";
    } else {
      alert("Email ou senha inválidos.");
      clearFields();
    }
  }
});

function validateField(input, error, validator, emptyMessage, invalidMessage) {
  let isValid = true;
  const value = input.value.trim();

  if (value === "") {
    error.textContent = emptyMessage;
    error.style.display = "block";
    isValid = false;
  } else if (validator && !validator(value)) {
    error.textContent = invalidMessage;
    error.style.display = "block";
    isValid = false;
  } else {
    error.style.display = "none";
  }

  return isValid;
}

function validateEmailField() {
  return validateField(
    emailInput, 
    emailError, 
    validateEmail, 
    "Por favor, preencha o email.", 
    "Por favor, insira um email válido."
  );
}

function validatePasswordField() {
  return validateField(
    passwordInput, 
    passwordError, 
    null, 
    "Por favor, preencha a senha."
  );
}
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function clearFields() {
  emailInput.value = "";
  passwordInput.value = "";
  emailError.style.display = "none";
  passwordError.style.display = "none";
}

function verifyLogin() {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const users = JSON.parse(localStorage.getItem("users")) || [];
  
  const isAuthenticated = users.some(user => user.email === email && user.password === password);
  
  return isAuthenticated;
}
