import { createStore } from "redux";
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");
const ADD = "ADD";
const MINUS = "MINUS";
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};
const onChange = () => {
  console.log("There was something change in store");
  number.innerText = countStore.getState();
};
const countStore = createStore(countModifier);
countStore.subscribe(onChange);
console.log(countStore);
add.addEventListener("click", () => countStore.dispatch({ type: ADD }));
minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }));
