let todos = ["geree tseverleh", "hool hiih", "hicheel hiih", "kino uzeh"];
const button = document.getElementById("button");
const input = document.getElementById("input");
input.addEventListener("input", (event) => {
  console.log(event.target.value);
});
button.addEventListener("click", () => {
  if (!input.value) {
    errorhandling();
  } else {
    errorremove();
  }
  todos.push(input.value);
  renderTodos();
  input.value = null;
});

renderTodos();
function renderTodos() {
  const tasklist = document.getElementById("tasklist");
  tasklist.innerHTML = null;
  todos.sort().map((todo) => {
    const mur = document.createElement("div");
    mur.setAttribute("class", "mur");
    const x = document.createElement("button");
    x.setAttribute("id", "x");
    const p = document.createElement("p");
    p.innerText = todo;
    mur.appendChild(x);
    mur.appendChild(p);
    tasklist.appendChild(mur);
  });
}
x.addEventListener("click", () => {
  todos.split();
});

function errorhandling() {
  const p = document.getElementById("error");
  p.innerText = "aldaa garlaa";
}
function errorremove() {
  const p = document.getElementById("error");
  p.innerText = null;
}
