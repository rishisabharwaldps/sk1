
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyC1_5tKV09bPiS8AjXngm2_ysXqjXMwkuI",
  authDomain: "class-test-8f71a.firebaseapp.com",
  databaseURL: "https://class-test-8f71a-default-rtdb.firebaseio.com",
  projectId: "class-test-8f71a",
  storageBucket: "class-test-8f71a.appspot.com",
  messagingSenderId: "446819013709",
  appId: "1:446819013709:web:e8bc76ca955dbd49beb804"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!!!";

  function addRoom() {
   room_name=document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
     purpose: "adding room name"
   }); 
   localStorage.setItem("room_name", room_name);
   window.location="kwitter_page.html";
  }
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
window.location="index.html";
}