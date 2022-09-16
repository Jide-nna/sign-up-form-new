const form = document.getElementById("form");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
});
function checkInput() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  if (firstNameValue === "") {
    setErrorFor(firstName, "First Name cannot be blank");
  } else {
    setCorrectFor(firstName);
  }
  if (lastNameValue === "") {
    setErrorFor(lastName, "Last Name cannot be blank");
  } else {
    setCorrectFor(lastName);
  }
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else {
    setCorrectFor(email);
  }
  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else {
    setCorrectFor(password);
  }

  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = message;
    formControl.className = "form-control error";
  }
  function setCorrectFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control correct";
  }
}
