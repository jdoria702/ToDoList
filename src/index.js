import "./styles.css";
import loadStart from "./loadStart";

const projects = document.querySelectorAll("li");
projects.forEach((project) => {
  project.addEventListener("click", () => {
    console.log("CLICKED");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  loadStart();
});
