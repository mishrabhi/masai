// In this assignment, you are tasked with creating a JavaScript function named getUserData that simulates an asynchronous API request to fetch user data. The function takes two arguments: id (user ID) and callback (a callback function).
//After a delay of 2 seconds using setTimeout, the getUserData function calls the callback function and passes a dummy user object with properties such as id, name, and email. Additionally, a function named displayUser is created to take a user object as an argument and display the user details using console.log().
// The getUserData function is then called with a user ID and the displayUser function as the callback. The displayUser function is invoked with the user object received from the getUserData function.

function getUserData(id, callback) {
  // delay of 2 seconds using setTimeout
  setTimeout(() => {
    // user object
    const user = {
      id: id,
      name: "Pavan",
      email: "pavan@gmail.com",
    };

    // calling callback function with user object as parameter
    callback(user);
  }, 2000);
}

//For displaying user details
function displayUser(user) {
  console.log("User Id:", user.id);
  console.log("Name:", user.name);
  console.log("Email:", user.email);
}

getUserData(1, displayUser);
