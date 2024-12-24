var signUp =  document.querySelector(".signup");
var userName = document.querySelector(".userName");
var userEmail = document.querySelector(".userEmail");
var userPass = document.querySelector(".userPass");
// var allUsers = JSON.parse(localStorage.getItem("users")) || [];
// var regexName = /^[A-Za-z]{3,}/;
// var regexEmail =
//   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
// var regexPass = /^[A-Za-z0-9@-]{8,15}/;

// function isValid(input, regex) {
//   return regex.test(input.value) ? true : false;
// }

function isUserValid() {
  return (
    isValid(userName, regexName) && // true
    isValid(userEmail, regexEmail) &&
    isValid(userPass, regexPass)
  );
}

// function createUser(nameInput, emailInput, passwordInput) {
//   return {
//     name: nameInput.value,
//     email: emailInput.value,
//     password: passwordInput.value,
//   };
// }

function clear(nameInput, emailInput, passwordInput) {
  nameInput.value = null;
  emailInput.value = null;
  passwordInput.value = null;
}

function setStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// function isEmailExist(users, newUser){
//     for(var i = 0; i<users.length; i++){
//         if(users[i].email == newUser.email){
//             return true
//         }
//     }
//     return false
// }



function isEmailExist(users, newUser) {
  return users.some((user) => (user.email == newUser.email  ? true : false));
}

function showAlert(message){
    Swal.fire({
        title: message,
        icon: "success"
      });
}




signUp.addEventListener("click",function() {
  if (isUserValid()) {
    var user = createUser(userName, userEmail, userPass);
    if (!isEmailExist(allUsers, user)) {
      allUsers.push(user);
      setStorage("users", allUsers);
      showAlert("User Saved Successfully")
      clear(userName, userEmail, userPass);
    }else{
        showAlert("Email already exist, please try with another email");
    }
  } else {
    showAlert("Invalid Data")
  }
});

