export default function loadStart() {
  const todo = document.querySelector(".todo");

  const container = document.createElement("div");
  const title = document.createElement("h1");
  const description = document.createElement("p");

  container.classList.add("start-page");
  title.textContent = "Welcome to your TODO List!";
  description.textContent = "Keep track of things you want to do later";

  container.appendChild(title);
  container.appendChild(description);

  todo.appendChild(container);
}
