document.getElementById("login").addEventListener("click", function () {
  postData();
});

async function postData() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  console.log(username, password);

  let obj = {
    username,
    password,
  };
  try {
    let res = await fetch(`https://json-with-auth.onrender.com/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });

    let data = await res.json();
    console.log(data);

    if (data.accessToken) {
      alert(`Hey ${data.user.username}, Welcome Back`);
    }
  } catch (error) {
    console.log(error);
  }
}
