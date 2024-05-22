//adding a eventListener
document.addEventListener("DOMContentLoaded", function () {
  //existing user list
  const users = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
    },
  ];

  // selecting user container
  const userContainer = document.getElementById("user-container");

  //function to create user card
  function createUserCard(user) {
    const card = document.createElement("div");
    card.classList.add("user-card");
    card.innerHTML = `
        <h2>${user.name}</h2>
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>
      `;
    userContainer.appendChild(card);
  }
  //function to display user cards
  function displayUserCards() {
    //using forEach() to access all users present
    users.forEach((user) => createUserCard(user));
  }
  //display existing user cards
  displayUserCards();

  //selecting user-form by id
  const userForm = document.getElementById("user-form");

  //adding eventListener on submit button in user form
  userForm.addEventListener("submit", function (event) {
    event.preventDefault();

    //collecting name, username and email from the form
    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    //creating new User object
    const newUser = {
      id: users.length + 1,
      name: name,
      username: username,
      email: email,
    };
    //adding newUser object into the users array
    users.push(newUser);

    //Using the function createUserCard to create new card for new user
    createUserCard(newUser);

    //reseting the form after successful submission of form
    userForm.reset();
  });
});
