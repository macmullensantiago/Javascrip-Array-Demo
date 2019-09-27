// Import stylesheets
import "./style.css";

let cat = [];
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const categories: HTMLElement = document.getElementById("category");

const category: HTMLElement = document.getElementById("categories");

categories.addEventListener(
  "change",
  () => (category.innerHTML = cat.concat(categories.value).toString())
);
