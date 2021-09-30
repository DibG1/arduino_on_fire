// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var config = {
  apiKey: "AIzaSyAE5kbcoKdl1RbenvlpVtp_b1EzvQqxTYQ",
  authDomain: "ledstats-dfc7c.firebaseapp.com",
  databaseURL: "https://ledstats-dfc7c-default-rtdb.firebaseio.com",
  projectId: "ledstats-dfc7c",
  storageBucket: "ledstats-dfc7c.appspot.com",
  messagingSenderId: "122796939618",


};

firebase.initializeApp(config);

$(document).ready(function(){
  var database=firebase.database();
  var ledpos;

  database.ref().on("value", function(snap){
    ledpos=snap.val().leeds;
    if(ledpos==1){
      $(".ledpos").text("LED is ON");
    }else{
        $(".ledpos").text("LED is OFF");
    }
  });
  $(".LEDbutton").click(function(){
  firebase.database().ref().child("ledpos").get((res, err) => {
    if (err)
       console.log(err)
    else {
      console.log(res)
    }  
  });
});
