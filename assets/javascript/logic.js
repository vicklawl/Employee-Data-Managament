// Initialize Firebase


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCY8HJ8E-igN1X1yTmzQQBvKO8-U-Tr1HI",
    authDomain: "employeedata-9fde7.firebaseapp.com",
    databaseURL: "https://employeedata-9fde7.firebaseio.com",
    projectId: "employeedata-9fde7",
    storageBucket: "employeedata-9fde7.appspot.com",
    messagingSenderId: "3949567751"
  };
  firebase.initializeApp(config);


// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)


// Assign the reference to the database to a variable named 'database'
var database = firebase.database();

//get the db values to populate the table
database.ref().on("value", function(snapshot) {
  var name = snapshot.val().name;
  var rate = snapshot.val().rate;
  var role = snapshot.val().role;
  var start = snapshot.val().start;

  console.log("name from DB is " + name);

  $block = $("<tr>");
  $name = $("<td>" + name + "</td>");
  $role = $("<td>" + role + "</td>");
  $monthsworked = $("<td>" + "</td>");
  $rate = $("<td>" + rate + "</td>");
  $total = $("<td>"  + "</td>");

  $block.append($name);
  $block.append($role);
  $block.append($monthsworked);
  $block.append($rate);
  $block.append($total);
  $block.append("</tr>");

  $("#myTable").append($block);
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});


// Initial Values




// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.





// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#onSubmit").on("click", function(event) { 
  // Prevent form from submitting
  event.preventDefault();

  console.log("Came to click submit button");

  var empName = $("#empName").val();
  var empRole = $("#empRole").val();
  var empStart = $("#empStart").val();
  var empRate = $("#empRate").val();

  var newEmp = {
    name: empName,
    role: empRole,
    start: empStart,
    rate: empRate
  };

  // Get the input values
  database.ref().push(newEmp);
    
  });

  database.ref().on("child_added", function(childSnapshot){
    console.log(childSnapshot.val());

  });

