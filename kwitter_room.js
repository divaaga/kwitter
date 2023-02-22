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
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
      document.getElementById("output").innerHTML+=row;
      // a=a+1
      // a+=1
      //End code
      });
});
}

getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}
