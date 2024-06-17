// Create an HTML file that includes a button labeled "Fetch Users."
// Write a JavaScript function in a separate file (index.js) that uses the fetch() function to retrieve user data from the Reqres API.
// Display the user information on the webpage in a visually appealing manner, including at least the user's name, email, and avatar. Apply CSS styling to enhance the visual presentation.

let btn = document.getElementById("fetch-user");

btn.addEventListener("click", function () {
  getUserdata();
});

async function getUserdata() {
  try {
    let res = await fetch(`https://reqres.in/api/users?page=1`);
    let users = await res.json();
    console.log(users);
    displayUserdata(users.data); // Access the 'data' property
  } catch (error) {
    console.log("Something went wrong");
  }
}

function displayUserdata(users) {
  let userContainer = document.getElementById("user-container");
  userContainer.innerHTML = ""; // Clear previous user data

  users.forEach((ele) => {
    let card = document.createElement("div");
    card.classList.add("user-card");

    let image = document.createElement("img");
    image.src = ele.avatar;

    let name = document.createElement("h3");
    name.textContent = `${ele.first_name} ${ele.last_name}`; // Full name

    let email = document.createElement("p");
    email.textContent = ele.email;

    card.append(image, name, email);
    userContainer.appendChild(card); // Append the card to the container
  });
}
