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
const todoContainer = document.querySelector(".todo-container");


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


class TodoItem{
    constructor(title, description, dueDate, priority, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.id = crypto.randomUUID();
    }
}

const firstTodo = new TodoItem("Gym", "I want to go to the gym and get strong", "05/12/25", "Medium", "Default");
const secondTodo = new TodoItem("Read", "I want to finish the book Demon Haunted World", "05/29/25", "High", "Default");
const thirdTodo = new TodoItem("Academic", "I want graduate with my Associate of Science", "06/05/2025", "High", "Default");
console.log(firstTodo);


function renderTodo (todo) {
    const newTodoRow = document.createElement("div")
    newTodoRow.className = "todo-row";
    todoContainer.appendChild(newTodoRow);

    newTodoRow.setAttribute("data-id", todo.id);

    const title = document.createElement("div");
    title.textContent = todo.title;
    title.className = "title";
    newTodoRow.appendChild(title);


    const description = document.createElement("div");
    description.textContent = todo.description;
    description.className = "description";
    newTodoRow.appendChild(description);

    const dueDate = document.createElement("div");
    dueDate.textContent = todo.dueDate;
    dueDate.className = "due-date";
    newTodoRow.appendChild(dueDate);

    const priority = document.createElement("div");
    priority.textContent = todo.priority;
    priority.className = "priority";
    newTodoRow.appendChild(priority);

    const remove = document.createElement("i");
    remove.className = "bi bi-trash";
    // removeBtn.textContent = "🗑️";
    const removeBtn = document.createElement("button");
    removeBtn.className = "remove";
    removeBtn.appendChild(remove);
    newTodoRow.appendChild(removeBtn);

    removeBtn.addEventListener("click", function () {
        removeBook(todo.id);
      });
}

renderTodo(firstTodo);
renderTodo(secondTodo);
renderTodo(thirdTodo);