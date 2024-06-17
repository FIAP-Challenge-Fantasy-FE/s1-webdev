const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const repeatPasswordInput = document.getElementById("repeatPassword");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const repeatPasswordError = document.getElementById("repeatPasswordError");

emailInput.addEventListener("blur", validateEmailField);
emailInput.addEventListener("input", validateEmailField);
passwordInput.addEventListener("blur", validatePasswordField);
passwordInput.addEventListener("input", validatePasswordField);
repeatPasswordInput.addEventListener("blur", validateRepeatPasswordField);
repeatPasswordInput.addEventListener("input", validateRepeatPasswordField);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const isEmailValid = validateEmailField();
  const isPasswordValid = validatePasswordField();
  const isRepeatPasswordValid = validateRepeatPasswordField();

  if (isEmailValid && isPasswordValid && isRepeatPasswordValid) {
    if(userCreated()) {
      alert("Usuário cadastrado com sucesso!");
      window.location.href = "/login";
    } else {
      alert("Email já cadastrado.");
    }

    clearFields();
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
  const minLength = 8; // set your desired minimum length
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/g; // regex for special characters

  return validateField(
    passwordInput, 
    passwordError, 
    (value) => value.length >= minLength && specialCharRegex.test(value), 
    "Por favor, preencha a senha.",
    "A senha deve ter pelo menos " + minLength + " caracteres e conter pelo menos um caractere especial ou número."
  );
}

function validateRepeatPasswordField() {
  return validateField(
    repeatPasswordInput, 
    repeatPasswordError, 
    (value) => value === passwordInput.value.trim(), 
    "Por favor, preencha a senha novamente.", 
    "As senhas não coincidem."
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
  repeatPasswordInput.value = "";
  repeatPasswordError.style.display = "none";
}

function userCreated() {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const isUserExists = users.some(user => user.email === email);

  if (isUserExists) {
    return false;
  }

  const newUser = { email, password };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  return true;
}
