import { getElement } from "./getElement.js";
import { fetchRandom } from "./fetch.js";
import { display } from "./display.js";

const url = "https://randomuser.me/api/";
const randomBtn = getElement(".random-btn");
const main = getElement(".main")
console.log(main);





const start = async () => {
 
  const randomData = await fetchRandom(url);
    display(randomData);
    randomBtn.addEventListener("click", async () => {
      const randomData = await fetchRandom(url);
      display(randomData);
    });
    
};
start();

