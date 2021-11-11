// sign up pop up
document.getElementById("signupbtn").onclick = function() {
    document.querySelector(".signup").style.display = "block"
}

// close sign in
document.getElementById("closebtn").onclick = function(){
    document.querySelector(".signup").style.display = "none"
}

// sign in pop up
document.getElementById("signinbtn").onclick = function() {
    document.querySelector(".login").style.display = "block"
}

document.getElementById("close").onclick = function() {
    document.querySelector(".login").style.display = "none"
}