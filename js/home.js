var helloUser = document.querySelector(".helloUser")
var userLogin = JSON.parse(localStorage.getItem("userLogin"))
var logout = document.querySelector(".logout")


helloUser.innerHTML= `Welcome ${allUsers[userLogin].name}`
logout.addEventListener("click", function(){
window.open('../index.html', "_self")})