document.getElementById("loginbtn").onclick = () => {

   
    //get htm elements;
    let email = document.getElementById("loginemail").value; 
    let password = document.getElementById("loginpassword").value;
    
    if(!email || !password){
        alert('Email and password is required!')
    }
    else {
        document.getElementById("logginginbtn").style.display = 'block'
        document.getElementById("loginbtn").style.display = "none";
      // invoke firebase;
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((usercredentials) => {
          
          window.location.href = "home.html";
        })
        .catch((error) => {
          console.log(error.message);
            document.getElementById("logginginbtn").style.display = "none";
            document.getElementById("loginbtn").style.display = "block";
            document.getElementById("loginerrormessage").innerHTML = error.message;

            setTimeout(() => {
                document.getElementById("loginerrormessage").style.display = 'none';
            }, 5000)
        });
    }

}


