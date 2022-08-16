document.getElementById("resetpassword").onclick = () => {
    // get html elements'
    let email = document.getElementById('email').value
    
    // invoke firebase;
    firebase.auth().sendPasswordResetEmail(email).then(() => {
        alert('a password reset link has been sent to the email you entered!')
    }).catch((error) => {
        console.log(error.message);
    });
};