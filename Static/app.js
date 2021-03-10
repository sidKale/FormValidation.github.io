const form = document.getElementById("form");
const userName = document.getElementById("name");
const email = document.getElementById("email");
const phnumber = document.getElementById("phoneNumber");
const password = document.getElementById("password");
const cpassword = document.getElementById("cPassword");
const button = document.getElementById(".submit");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputValidation();
});

function inputValidation() {
  const nameval = userName.value.trim();
  const emailval = email.value.trim();
  const pnval = phnumber.value.trim();
  const pass1val = password.value.trim();
  const pass2val = cpassword.value.trim();

  if (nameval === "") {
    setError(userName, "Name Cannot be blank");
  } else {
    setSuccess(userName);
  }

  if (emailval === "") {
    setError(email, "Email cannot be blank");
  } else if (!isEmail(emailval)) {
    setError(email, "Enter correct Email");
  } else {
    setSuccess(email);
  }
  if (pnval === "") {
    setError(phnumber, "Phone Number Cannot be blank");
  } else if (pnval.length !== 10) {
    setError(phnumber, "Phone Number should be of 10 digits");
  } else {
    setSuccess(phnumber);
  }

  if (pass1val === "") {
    setError(password, "Password cannot be blank");
  } else if (pass1val.length < 8) {
    setError(password, "Password length is 8 digits");
  } else {
    setSuccess(password);
  }

  if (pass2val === "") {
    setError(cpassword, "confirm password cannot be blank");
  } else if (pass1val !== pass2val) {
    setError(cpassword, "Passwords does not match");
  } else {
    setSuccess(cpassword);
  }
}

function setError(input, message) {
  const formInputs = input.parentElement;
  const smallMessage = formInputs.querySelector("small");
  formInputs.className = "formInputs error";
  smallMessage.innerText = message;
}
function setSuccess(input) {
  const formInputs = input.parentElement;
  formInputs.className = "formInputs success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
