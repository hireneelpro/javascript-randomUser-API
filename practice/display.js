import { getElement } from "./getElement.js";
export const display = (data) => {
  const title = getElement(".title");
  const text = getElement(".title-text");
  const tag = getElement(".tag");
  const btns = document.querySelectorAll(".icon");
  const btnContainer = getElement(".icon-container");
  const randomImage = getElement(".random-image");
  const nameBtn = document.querySelector('[data-id="name"]');
  console.log(nameBtn);
  const removeSelected = () => {
    btns.forEach((item) => {
      item.classList.remove("selected");
    });
  };
  // ============================================//

  const { name, email, location, phone, picture, dob, login } = data.results[0];
  //   console.log(name, email, location, phone, picture, dob);
  const fullName = `${name.title} ${name.first} ${name.last}`;
  const address = ` ${location.city} ${location.state} ${location.country}`;
  const password = login.password;
  const age = `${dob.age}`;
  const image = `${picture.large}`;
  //   console.log(fullName, address, email, age, image, phone,password);

  const finalData = {
    name: fullName,
    email: email,
    age: age,
    address: address,
    phone: phone,
    password: password,
    image: image,
  };
  //   console.log(finalData);

  tag.textContent = "name";
  text.textContent = fullName;
  randomImage.src = image;
  removeSelected();
  nameBtn.classList.add("selected");
  btns.forEach((each) => {
    each.addEventListener("click", (e) => {
      removeSelected();

      e.currentTarget.classList.add("selected");
      const value = e.currentTarget.dataset.id;
      // console.log(value);
      tag.textContent = value;
      text.textContent = finalData[value];
      console.log(finalData[value]);
    });
  });
  // tag.textContent = `${value}`;
  // for (const item in finalData) {
  //   if (`${item}` === `${value}`) {
  //     text.textContent = `${finalData[item]}`;
  //   }
  // }
};
