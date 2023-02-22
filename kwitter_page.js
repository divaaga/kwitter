//YOUR FIREBASE LINKS
const firebaseConfig = {
      // apiKey: "AIzaSyAv0NmBjpXvTV7gWelI4bQpFjf2Wdv0qLs",
      // authDomain: "classc93-fba7f.firebaseapp.com",
      // databaseURL: "https://classc93-fba7f.firebaseio.com/",
      // projectId: "classc93-fba7f",
      // storageBucket: "classc93-fba7f.appspot.com",
      // messagingSenderId: "743533870522",
      // appId: "1:743533870522:web:74e3a9ec6f6fcc3172f183"
      // 
      apiKey: "AIzaSyDIvzmM1zXe9X87Jvv2WWBDIPXO7IwUQuY",
      authDomain: "class93-b9725.firebaseapp.com",
      databaseURL: "https://class93-b9725-default-rtdb.firebaseio.com",
      projectId: "class93-b9725",
      storageBucket: "class93-b9725.appspot.com",
      messagingSenderId: "1031588022707",
      appId: "1:1031588022707:web:4ff2a34f035fe54e1c23c6",
      measurementId: "G-CVG8C8TSJ9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
         name : user_name,
         message : msg,
         like : 0
      });
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//Start code
      console.log(firebase_message_id);
      console.log(message_data);
      // console.log(this.id);
      name = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4>" + name + "<img src = 'tick.png' class = 'user_tick'></h4>";
      message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
      likebutton = "<button class = 'btn btn-warning' id =" + firebase_message_id + " value = " + like + " onclick = 'updateLike(this.id)'>";
      span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>Like : " + like + "</span></button><hr>";
      row = name_with_tag + message_with_tag + likebutton + span_with_tag;
      console.log("a");
      document.getElementById("output").innerHTML += row;
      console.log("b");
//End code
      } });  }); }

getData();

function updateLike(message_id) {
      console.log("c");
      console.log("Clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updatedLikes = Number(likes) + 1;
      console.log("new likes = " + updatedLikes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updatedLikes
      });
}

function logout() {
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
      // window.location.replace("index.html");
}

