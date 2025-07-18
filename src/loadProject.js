export default function loadProject() {
  const todo = document.querySelector(".todo");

  const container = document.createElement("div");
  const title = document.createElement("h1");
  const description = document.createElement("p");
  const date = document.createElement("p");
  const priority = document.createElement("h2");

  container.classList.add("start-page");
  title.textContent = "Welcome to your TODO List!";
  description.textContent = "Keep track of things you want to do later";
  date.textContent = "never";
  priority.textContent = "not important";

  container.appendChild(title);
  container.appendChild(description);
  container.appendChild(date);
  container.appendChild(priority);

  todo.appendChild(container);
}
