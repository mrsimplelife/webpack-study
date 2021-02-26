import "./app.css";
import * as math from "./math.js";
import nyancat from "./nyancat.jpg";

console.log(math.sum(1, 2));

window.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");
  document.body.innerHTML = `<img src="${nyancat}" />`;
});
