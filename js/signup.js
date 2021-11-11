document.getElementById("signupbutton").onclick = function() {
   let name = document.getElementById("name").value;
   let email =  document.getElementById("email").value;
   let password = document.getElementById("password").value;

        // signing up the user
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            let user = userCredential.user

            // console.log(user)
            window.location.href = "home.html"
        }).catch((error) => {
            console.log(error.message)
        })
}