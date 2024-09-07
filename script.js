document.addEventListener('DOMContentLoaded', function() {
const form = document.getElementById('mainForm');
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const message = document.getElementById("message");

//eventlisteners


  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (checkInputs()) {
      showModal();
    }
  });

  name.addEventListener("input", () => {
    validateField(name, name.value.trim() !== "", "Name cannot be blank");
  });

  email.addEventListener("input", () => {
    validateField(email, isEmail(email.value.trim()), "Not a valid email");
  });

  phone.addEventListener("input", () => {
    validateField(
      phone,
      isPhone(phone.value.trim()),
      "Not a valid phone number"
    );
  });

  password.addEventListener("input", () => {
    validateField(
      password,
      password.value.trim().length >= 8,
      "Password must be 8 characters or longer"
    );
  });

  message.addEventListener("input", () => {
    validateField(
      message,
      message.value.trim() !== "",
      "Message cannot be blank"
    );
  });


})