const responseDiv = document.getElementById("response-div");

const getUsers = () => {
  const URL = "https://hamzailyas-nodejs.herokuapp.com/users";

  axios.get(URL).then((response) => {
    const users = response.data;
    console.log(users);

    if (response.data.length === 0) {
      responseDiv.innerHTML = "No Users";
    } else {
      const usersList = users.map((user) => {
        return `<tr><td>${user._id}</td><td>${user.name}</td><td>${user.email}</td><td>${user.address}</td></tr>`;
      });

      const resultDiv = document.getElementById("result-div");

      resultDiv.innerHTML = ""

      resultDiv.innerHTML = usersList.join("");
    }
  });
};

const addUser = () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const addUserURL = "https://hamzailyas-nodejs.herokuapp.com/user";

  if (name === "" || email === "" || address === "") {
    alert("Please Fill All the Fields");
  } else {
    const userData = {
      name: name,
      email: email,
      address: address,
    };

    axios.post(addUserURL, userData).then((response) => {
      alert(`${userData.name} is Added`);
      getUsers();
    });
  }
};

function updateUser() {

  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const updateUserURL = `https://hamzailyas-nodejs.herokuapp.com/user/${id}`;

  if (name === "" || email === "" || address === "" || id === "") {
    alert("Please Fill All the Fields");
  } else {
    const userData = {
      id: id,
      name: name,
      email: email,
      address: address,
    };

    axios.put(updateUserURL, userData).then((response) => {
      alert(`${userData.name} is Updated`);
      getUsers();
    });
  }

}

function deleteUser() {

  let id = document.getElementById("id").value;
  console.log(id);
  const deleteUserURL = `https://hamzailyas-nodejs.herokuapp.com/user/${id}`;

  if (id === "") {
    alert("Please Enter ID");
  } else {
    const userData = {
      id: id
    };

    axios.delete(deleteUserURL, userData).then((response) => {
      alert(`${userData.name} is Deleted`);
      getUsers();
    });
  }

}