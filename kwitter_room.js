
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCOv64t0RTp5etx2swapJ4A9Uq-ssAlOSg",
      authDomain: "c100-828fd.firebaseapp.com",
      databaseURL: "https://c100-828fd-default-rtdb.firebaseio.com",
      projectId: "c100-828fd",
      storageBucket: "c100-828fd.appspot.com",
      messagingSenderId: "844872913244",
      appId: "1:844872913244:web:75ddf1f08d28b234f8b199",
      measurementId: "G-YJJ2T8L50H"
    };
    
   firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"     +user_name +"!";
    function addRoom(){
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
      console.log("Room Name-"+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
     getData();
     function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location= "kwitter_page.html"
     }
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
      window.location="qwitter.html";
}

