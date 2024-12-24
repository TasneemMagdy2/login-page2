var allUsers = JSON.parse(localStorage.getItem("users")) || [];

var regexName = /^[A-Za-z]{3,}/;
var regexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
var regexPass = /^[A-Za-z0-9@-]{8,15}/;

function isValid(input, regex) {
  return regex.test(input.value) ? true : false;
}

// function isUserValid() {
//   var valid = true;

//   if(userName){
//     valid = valid && isValid(userName, regexName);
//   }
//   if (userEmail) {
//     valid = valid && isValid(userEmail, regexEmail);
//   }
//   if (userPass) {
//     valid = valid && isValid(userPass, regexPass);
//   }
//   return valid;
// }

// true && false => false

function createUser(nameInput, emailInput, passwordInput) {
  return {
    name: nameInput.value || undefined,
    email: emailInput.value,
    password: passwordInput.value,
  };
}