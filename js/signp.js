document.getElementById("signupbutton").onclick = () => {
  
  // get html elements;

  let email = document.getElementById("email").value
  let password = document.getElementById("password").value
  let name = document.getElementById("name").value;
  let timestamp = firebase.firestore.Timestamp.fromDate(new Date());
  if(!email || !password){
    alert('Please fill in all inputs!')
  }
  else {
    document.getElementById("signingupbtn").style.display = "block";
    document.getElementById("signupbutton").style.display = "none";
    // SIGN UP LOGIC HERE;
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then((userCredentials) => {

      let user = userCredentials.user;
      let userId = user.uid
      alert('user has been created!')

      // CREATE A USERS COLLECTIONS;
     let userDoc = firebase.firestore().collection("users").doc(userId);
      userDoc.set({
        name,
        email,
        timestamp,
        userId
      }).then(() => {
        alert('user data has beeen added!')
        window.location.href = "main.html"
        // window.location.reload();
      }).catch((error) => {
        console.log(error.message);
          document.getElementById("signingupbtn").style.display = "none";
          document.getElementById("signupbutton").style.display = "block";
      })
    }).catch((error) => {
      console.log(error.message);
      document.getElementById("errormessage").innerHTML = error.message;
      setTimeout(() => {
        document.getElementById("errormessage").style.display = "none";
      }, 5000)
       document.getElementById("signingupbtn").style.display = "none";
       document.getElementById("signupbutton").style.display = "block";
    })
  }
};

