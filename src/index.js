import "./styles.css"


console.log("hello world");

const addTodoBtn = document.getElementById("todoBtn");
const todoModal = document.querySelector(".modal");
const todoCloseBtn = document.getElementById("todo-close");
const closeBtnTodo = document.getElementById("close-btn-todo");
const projectModal = document.getElementById("newProjectModal");
const projectCloseBtn = document.getElementById("project-close");
const addProjectBtn = document.getElementById("new-project-btn");
const closeBtnProject = document.getElementById("close-btn-project");


window.onclick = function (event) {
    if (event.target == todoModal) {
      todoModal.style.display = "none";
    }
};

addTodoBtn.onclick = function() {
    todoModal.style.display = "block";
}

todoCloseBtn.onclick = function() {
    todoModal.style.display = "none";
}

closeBtnTodo.onclick = function() {
    todoModal.style.display = "none";
}

projectCloseBtn.onclick = function() {
    projectModal.style.display = "none"
}

addProjectBtn.onclick = function() {
    projectModal.style.display = "block";
}

closeBtnProject.onclick = function() {
    projectModal.style.display = "none";
}
