document.querySelector("form").addEventListener("submit", addTodo);

function addTodo(event) {
  event.preventDefault();
  const item = document.createElement("li");
  item.innerText = document.getElementById("item").value;

  const button = document.createElement("button");
  button.innerText = "x";
  button.addEventListener("click", removeTodo);
  item.append(button);

  const list = document.querySelector("ul");
  list.appendChild(item);
}

function removeTodo(event) {
  event.target.parentNode.remove();
}
