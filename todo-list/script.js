const todoContainer = document.querySelector(".todo");
const addBtn = document.getElementById("submit");

let todos = [];

function displayTodo(todos) {
  todoContainer.innerHTML = "";
  let html = "";

  for (let i = 0; i < todos.length; i++) {
    html = `
            <li>${i === 0 ? 1 : 1 + i}. ${todos[i]}</li>
        `;
    todoContainer.innerHTML += html;
  }
  // todos.forEach((todo) => {
  //     html = `
  //         <li>${todo}</li>
  //     `
  //     todoContainer.innerHTML += html;
  // })
}

addBtn.addEventListener("click", () => {
  const aa = window.prompt("Add your todo");

  if (aa === null) {
    return ""; // If the user cancels the prompt, do nothing
  }
  // Check if aa is a string and not a number
  if (typeof aa === "string" && isNaN(aa)) {
    todos.push(aa); // Add the todo to the array
    console.log(todos);
    displayTodo(todos); // Display the todos on the screen
  } else {
    alert("Please enter a valid todo (string).");
  }
});
