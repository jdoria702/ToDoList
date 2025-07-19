import "./styles.css";
import loadStart from "./loadStart";

const projects = document.querySelectorAll("li");
projects.forEach((project) => {
  project.addEventListener("click", () => {
    console.log("CLICKED");
  });
});

const projectDialog = document.getElementById("project-dialog");
const newProjectBtn = document.getElementById("new-project");
const projectForm = projectDialog.querySelector("form");

newProjectBtn.addEventListener("click", () => {
  projectDialog.showModal();
});

projectForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const projectTitle = projectForm.project - title;
});

document.addEventListener("DOMContentLoaded", () => {
  loadStart();
});
