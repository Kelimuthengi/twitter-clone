document.getElementById("loginbtn").onclick = () => {

    let email = document.getElementById("loginemail").value;
    let password = document.getElementById("loginpassword").value;

    firebase.auth().signInWithEmailAndPassword(email,password)
    .then((userCredential) => {
        let user = userCredential.user;

        window.location.href = "home.html"
    }).catch((error) => {
        console.log(error.message);
    })
}