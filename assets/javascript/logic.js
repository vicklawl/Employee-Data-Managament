// Initialize Firebase

{/* <script src="https://www.gstatic.com/firebasejs/5.8.0/firebase.js"></script> */}

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

//get the input values from the form
var empName = $("#empName").val();
var empRole = $("#empRole").val();
var empStart = $("#empStart").val();
var empRate = $("#empRate").val();


// Initial Values
var newEmp = {
  name: empName,
  role: empRole,
  start: empStart,
  rate: empRate
};



// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.





// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit").on("click", function(event) { 
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
  database.ref().push(newEmp);
    
  });

