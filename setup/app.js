import { get } from "./get.js";

const key = get(".key");
const value = get(".value");
const img = get(".img");

const URL = "https://randomuser.me/api/";

const fetchUser = async () => {
  try {
    const response = await fetch(URL);

    const data = await response.json();
    return data;
  } catch {
    throw new Error("user data can not be fetched");
  }
};

const displayUser = async (data) => {
  const { results } = data;
  const { email, name, cell, dob, location, login, picture } = results[0];
  const fullname = `${name.first} ${name.last}`;
  const age = dob.age;
  const password = login.password;
  const address = `${location.street.number} ${location.street.name}`;
  const image = picture.medium;
  const user = {
    name: fullname,
    age: age,
    address: address,
    password: password,
    email: email,
    phone: cell,
    image: image,
  };
  key.textContent = `my name is`;
  value.textContent = fullname;
  img.src = image;
  const allButtns = [...document.querySelectorAll(".btn")];
  allButtns.forEach((each) => {
    each.addEventListener("mouseover", (e) => {
      const clickedButton = e.currentTarget.dataset.id;
      console.log(clickedButton);
      key.textContent = `my ${clickedButton} is`;
      value.textContent = `${user[clickedButton]}`;
    });
  });
};

const start = async () => {
  try {
    const data = await fetchUser();
    await displayUser(data);
  } catch {
    throw new Error("there is an error");
  }
};

start();
const random = get(".random-btn");
random.addEventListener("click", () => {
  start();
});
