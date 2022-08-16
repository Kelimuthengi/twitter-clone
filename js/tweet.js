// on auth state changed!
firebase.auth().onAuthStateChanged((user) => {

    if(user){

        var db = firebase.firestore();
        // logged in user can perfrom tasks;

        document.getElementById("tweetbtn").onclick = () => {
          // get the tweet;
          let tweet = document.getElementById("whatshappeining").value;
          let timestamp = firebase.firestore.Timestamp.fromDate(new Date());
          let userId = user.uid
        //   invoke firebase;
          let tweetDoc = db.collection("tweets").doc();
          tweetDoc.set({
            tweet,
            timestamp,
            userId,
            tweetId: tweetDoc.id,
          }).then(() => {
            alert('tweet was sent successfully!')
            window.location.href = 'home.html'
          }).catch((error) => {
            console.log(error.message);
          });
        };



        // pull all tweets;
        db.collection("tweets").get().then((alltweets) => {
          alltweets.forEach((doc) => {

            let tweet = doc.data().tweet;
            let timestamp = doc.data().timestamp;
            let date = timestamp.toDate().toLocaleDateString();
            let time = timestamp.toDate().toLocaleTimeString();
            console.log(time);
            console.log(tweet);
          })
        })
        
    }else{
        // user is logged ou or has no account...
        window.location.href = 'main.html'
    }
})