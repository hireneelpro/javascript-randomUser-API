export const get = (selection) => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else throw new Error("selected element is incorrect");
};
