var singUp =  document.querySelector(".loginPage");
var login = document.querySelector(".loginBtn");
var emailInput = document.querySelector(".userEmail");
var passInput = document.querySelector(".userPassword");

var userIndex;
login.addEventListener("click", function () {
  if (isUserValid()) {
    var user = createUser("", emailInput, passInput);
    if (isUserExist(allUsers, user)) {
      localStorage.setItem("userLogin", JSON.stringify(userIndex));
      window.location.href = "./pages/home.html";
    } else {
      console.log("User does not exist");
    }
  } else {
    console.log("User not valid");
  }
});

function isUserExist(users, loginUser) {
  for (var i = 0; i < users.length; i++) {
    if (
      users[i].email == loginUser.email &&
      users[i].password == loginUser.password
    ) {
      userIndex = i;
      return true;
    }
  }
  return false;
}

function isUserValid() {
  return isValid(emailInput, regexEmail) && isValid(passInput, regexPass);
}

singUp.addEventListener("click", function () {
  window.location.href = "./pages/singUp.html";
  // window.open("./pages/singUp.html", "_self")
});