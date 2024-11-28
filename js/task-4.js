// e.preventDefault();
const login = {
  email: "",
  password: "",
};

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementsByName("email")[0].value.trim();
  const password = document.getElementsByName("password")[0].value.trim();

  if (!email || !password) {
    alert("All form fields must be filled in");
    return;
  }

  login.email = email;
  login.password = password;

  form.reset();

  console.log(login);
});
