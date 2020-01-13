document.getElementById("form-data").addEventListener("submit", e => {
  const name = document.getElementById("name");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  if (name.value == "") {
    name.classList.add("error");
    const div = document.createElement("div");
    div.innerHTML = `
             <span class="errorFirstName">First Name cannot be empty</span> `;
    document.getElementById("errorFirstName").appendChild(div);
  } else if (!name.value == "") {
    if (name.classList.contains("error")) {
      name.classList.remove("error");
      document.getElementById("errorFirstName").children[0].remove();
    }
  }
  if (lastName.value == "") {
    lastName.classList.add("error");
    const div = document.createElement("div");
    div.innerHTML = `
             <span class="errorLastName">Last Name cannot be empty</span> `;
    document.getElementById("errorLastName").appendChild(div);
  } else if (!lastName.value == "") {
    if (lastName.classList.contains("error")) {
      lastName.classList.remove("error");
      document.getElementById("errorLastName").children[0].remove();
    }
  }
  if (email.value == "") {
    email.classList.add("error");
    const div = document.createElement("div");
    div.innerHTML = `
             <span class="errorEmail">Looks like it is not an email</span> `;
    document.getElementById("errorEmail").appendChild(div);
  } else if (!email.value == "") {
    if (email.classList.contains("error")) {
      email.classList.remove("error");
      document.getElementById("errorEmail").children[0].remove();
    }
  }
  if (password.value == "") {
    password.classList.add("error");
    const div = document.createElement("div");
    div.innerHTML = `
             <span class="errorPassword">Password cannot be empty</span> `;
    document.getElementById("errorPassword").appendChild(div);
  } else if (!password.value == "") {
    if (password.classList.contains("error")) {
      password.classList.remove("error");
      document.getElementById("errorPassword").children[0].remove();
    }
  }

  e.preventDefault();
});
