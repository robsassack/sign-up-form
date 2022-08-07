const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const submit = document.querySelector(".submit-button");
const passMatch = document.querySelector(".pass-matching");
const form = document.getElementById("main-form");

firstName.addEventListener("input", () => {
  if (firstName.value.length < 2) {
    firstName.setCustomValidity("First name must be at least 2 characters long");
    firstName.reportValidity();
  } else {
    firstName.setCustomValidity("");
  }
});

lastName.addEventListener("input", () => {
  if (lastName.value.length < 2) {
    lastName.setCustomValidity("Last name must be at least 2 characters long");
    lastName.reportValidity();
  } else {
    lastName.setCustomValidity("");
  }
});

email.addEventListener("input", () => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Email is not valid");
    email.reportValidity();
  } else {
    email.setCustomValidity("");
  }
});

phone.addEventListener("input", () => {
  if (phone.validity.patternMismatch) {
    phone.setCustomValidity("Phone number is not valid");
    phone.reportValidity();
  } else {
    phone.setCustomValidity("");
  }
});

[password, confirmPassword].forEach((input) => {
  input.addEventListener("input", () => {
    if (password.value !== confirmPassword.value) {
      input.setCustomValidity("Passwords do not match");
      input.reportValidity();
    } else {
      input.setCustomValidity("");
    }
  });
});
