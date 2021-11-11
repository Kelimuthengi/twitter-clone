firebase.auth().onAuthStateChanged((user) => {
    // console.log(user.uid);

    if(user) {

    }

    else {
        window.location.href = "main.html"
    }
})