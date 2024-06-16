const form = document.getElementById("contact-form");
const firstName = document.getElementById("firstName");
const firstNameError = document.querySelector(".firstName-error");
const lastNameError = document.querySelector(".lastName-error");
const emailError = document.querySelector(".email-error");
const queryError = document.querySelector(".query-error");
const termsError = document.querySelector(".terms-error");
const messageError = document.querySelector(".message-error");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const query = document.querySelectorAll('input[name="query"]');
const message = document.getElementById("message");
const successMessage = document.querySelector(".success-message");
const termsCheck = document.querySelector('input[name="terms-check"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  event.stopPropagation();
  let isValid = true;
  let isQueryChecked = false;

  // Validate first name
  if (firstName.value.trim() === "") {
    firstName.classList.add("error");
    firstNameError.textContent = "this field is required";
    isValid = false;
  } else {
    firstName.classList.remove("error");
    firstNameError.textContent = "";
  }

  // Validate last name
  if (lastName.value.trim() === "") {
    lastName.classList.add("error");
    lastNameError.textContent = "this field is required";
    isValid = false;
  } else {
    lastName.classList.remove("error");
    lastNameError.textContent = "";
  }

  // Validate email
  if (!validateEmail(email.value)) {
    email.classList.add("error");
    emailError.textContent = "please enter a valid email address";
    isValid = false;
  } else {
    email.classList.remove("error");
    emailError.textContent = "";
    isValid = true;
  }

  // Validate query type
  for (let i = 0; i < query.length; i++) {
    if (query[i].checked) {
      isQueryChecked = true;
      break;
    }
  }

  if (!isQueryChecked) {
    queryError.textContent = "Please select a query type."; // Replace with error message if needed
    isValid = false;
  } else {
    queryError.textContent = ""; // Replace with error message if needed
  }

  // Validate message
  if (message.value.trim() === "") {
    message.classList.add("error");
    messageError.textContent = "this field is required";
    isValid = false;
  } else {
    message.classList.remove("error");
    messageError.textContent = "";
    isValid = true;
  }

  // Validate terms acceptance
  if (!termsCheck.checked) {
    termsError.textContent = ""; // Replace with error message if needed
    isValid = false;
  } else {
    termsError.textContent = ""; // Replace with error message if needed
  }

  // If all fields are valid, submit the form
  if (isValid) {
    successMessage.classList.add("show");
  } else {
    successMessage.classList.remove("show");
  }
});

// Function to validate email format
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
