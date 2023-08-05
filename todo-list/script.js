const ulElement = document.getElementById("myUl");
const addBtn = document.getElementById("addBtn");
const input = document.getElementById("input");

// const liElement = document.getElementsByTagName("li");

function allInOne() {
  addBtn.addEventListener("click", createTodo);
  input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      createTodo();
    }
  });
}

function createTodo() {
  const liElement = document.createElement("li");
  let inputValue = input.value;
  liElement.textContent = inputValue;

  if (inputValue === "") {
    alert("please write something");
  } else {
    ulElement.appendChild(liElement);
  }
  input.value = "";

    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    liElement.appendChild(span);

  const closeEl = document.getElementsByClassName("close");
  for (let i = 0; i < closeEl.length; i++) {
    closeEl[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }

}

ulElement.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }
  },
  false
);

allInOne();
