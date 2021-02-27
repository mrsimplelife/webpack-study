import axios from "axios";
import "./app.css";
import * as math from "./math.js";
// import nyancat from "./nyancat.jpg";

console.log(math.sum(1, 2));

window.addEventListener("DOMContentLoaded", async () => {
  const res = await axios.get("/api/users");
  console.log(res);
  // console.log("DOMContentLoaded");
  // document.body.innerHTML = `<img src="${nyancat}" />`;
  document.body.innerHTML = (res.data || [])
    .map((user) => {
      return `<div>${user.id}:${user.name}</div>`;
    })
    .join("");
});
console.log(process.env.NODE_ENV);
// console.log(TWO);
// console.log(TWOSTRING);
// console.log(api.domain);
