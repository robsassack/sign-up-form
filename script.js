const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const submit = document.querySelector(".submit-button");
const passMatch = document.querySelector(".pass-matching");
const form = document.getElementById("main-form");

firstName.addEventListener("blur", () => {
  blankFormEntry(firstName);
});

lastName.addEventListener("blur", () => {
  blankFormEntry(lastName);
});

email.addEventListener("blur", () => {
  blankFormEntry(email);
});

phone.addEventListener("blur", () => {
  blankFormEntry(phone);
});

password.addEventListener("blur", () => {
  blankFormEntry(password);
});

confirmPassword.addEventListener("blur", () => {
  blankFormEntry(confirmPassword);
});

[password, confirmPassword].forEach((input) => {
  input.addEventListener("keyup", () => {
    if (password.value !== "" && confirmPassword.value !== "") {
      if (password.value !== confirmPassword.value) {
        passMatch.innerText = "* Passwords do not match";
        password.style.border = "1px solid red";
        confirmPassword.style.border = "1px solid red";
        submit.disabled = true;
      } else {
        passMatch.innerText = "";
        submit.disabled = false;
      }
    }
  });
});

function blankFormEntry(input) {
  if (input.value === "" || typeof input.value !== "string") {
    input.style.border = "1px solid red";
  } else {
    input.style.border = "1px solid rgb(0, 0, 0, 0.2)";
  }
}
