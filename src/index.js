import "./styles.css";

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
const titleValue = document.getElementById("title");
const descriptionValue = document.getElementById("description");
const dueDateValue = document.getElementById("dueDate");
const priorityValue = document.getElementById("priority");

const todoForm = document.getElementById("newTodo");
todoForm.addEventListener("submit", submitTodoForm);

console.log(todoForm);

window.onclick = function (event) {
  if (event.target === todoModal) {
    todoModal.style.display = "none";
  } else if (event.target === projectModal) {
    projectModal.style.display = "none";
  }
};

addTodoBtn.onclick = function () {
  todoModal.style.display = "block";
};

todoCloseBtn.onclick = function () {
  todoModal.style.display = "none";
};

closeBtnTodo.onclick = function () {
  todoModal.style.display = "none";
};

projectCloseBtn.onclick = function () {
  projectModal.style.display = "none";
};

addProjectBtn.onclick = function () {
  projectModal.style.display = "block";
};

closeBtnProject.onclick = function () {
  projectModal.style.display = "none";
};

class TodoItem {
  constructor(title, description, dueDate, priority, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.id = crypto.randomUUID();
  }
}

const firstTodo = new TodoItem(
  "Need to start going to the Gym",
  "I want to go to the gym and get strong",
  "2025-05-12",
  "Medium",
  "Default"
);
const secondTodo = new TodoItem(
  "I want to read more books",
  "I want to finish the book Demon Haunted World",
  "2025-05-29",
  "High",
  "Default"
);
const thirdTodo = new TodoItem(
  "Get that associates degree to transfer to a 4-year",
  "I want graduate with my Associate of Science",
  "2025-06-05",
  "High",
  "Default"
);
const fourthTodo = new TodoItem(
  "I want to play some videogames over the summer",
  "I want to play a lot of games",
  "2025-05-06",
  "Low",
  "Default"
);
console.log(firstTodo);


function addTodo(title, description, dueDate, priority, project) {
    const newTodo = new TodoItem(title, description, dueDate, priority, project);
    renderTodo(newTodo);
}

addTodo("I want to go on long walks on the beach", "It's always been a dream of mine I want to go on long walks with Loki & Tyr", "2012-03-02", "High", "Default");

function renderTodo(todo) {
  const newTodoRow = document.createElement("div");
  newTodoRow.className = "todo-row";
  todoContainer.appendChild(newTodoRow);
  newTodoRow.setAttribute("data-id", todo.id);

  const leftSide = document.createElement("div");
  leftSide.className = "left-side";

  const rightSide = document.createElement("div");
  rightSide.className = "right-side";

  const complete = document.createElement("i");
  complete.className = "bi bi-circle";
  const completeBtn = document.createElement("button");
  completeBtn.className = "complete";
  completeBtn.appendChild(complete);
  leftSide.appendChild(completeBtn);

  const title = document.createElement("div");
  title.textContent = todo.title;
  title.className = "title";
  // newTodoRow.appendChild(title);
  leftSide.appendChild(title);

  const description = document.createElement("div");
  description.textContent = todo.description;
  description.className = "description";
  // newTodoRow.appendChild(description);
  // leftSide.appendChild(description);
  newTodoRow.appendChild(leftSide);

  const dueDate = document.createElement("div");
  dueDate.textContent = todo.dueDate;
  dueDate.className = "due-date";
  // newTodoRow.appendChild(dueDate);
  rightSide.appendChild(dueDate);

  const priority = document.createElement("div");
  priority.textContent = todo.priority;
  priority.className = "priority";
  // newTodoRow.appendChild(priority);

  // checking what the user entered as a priority
  if (priority.textContent == "High") {
    newTodoRow.classList.add("high-priority");
  } else if (priority.textContent == "Medium") {
    newTodoRow.classList.add("medium-priority");
  } else if (priority.textContent == "Low") {
    newTodoRow.classList.add("low-priority");
  }

  const remove = document.createElement("i");
  remove.className = "bi bi-trash";
  const removeBtn = document.createElement("button");
  removeBtn.className = "remove";
  removeBtn.appendChild(remove);
  rightSide.appendChild(removeBtn);
  newTodoRow.appendChild(rightSide);

  //remove button event listener
  removeBtn.addEventListener("click", function () {
    removeTodo(todo.id);
  });

  //complete button event listener

  completeBtn.addEventListener("click", () => {
    if (complete.classList.contains("bi-circle")) {
      complete.classList.replace("bi-circle", "bi-check-circle");
      title.classList.add("task-done-text");
      newTodoRow.style.backgroundColor = "#d8d8d8";
    } else {
      complete.classList.replace("bi-check-circle", "bi-circle");
      title.classList.remove("task-done-text");
      newTodoRow.style.backgroundColor = "#fff";
    }
  });
}

function removeTodo(todoId) {
  const rowToRemove = document.querySelector(`.todo-row[data-id="${todoId}"]`);
  if (rowToRemove) {
    rowToRemove.remove();
  }
}

function submitTodoForm(e) {
    e.preventDefault();

    if (!todoForm.checkValidity()) {
        todoForm.reportValidity(); // show validation messages
        return;
      }

    const title = titleValue.value;
    const description = descriptionValue.value;
    const dueDate = dueDateValue.value;
    const priority = priorityValue.value;
    const project = "Default";

    addTodo(title, description, dueDate, priority, project);
    todoForm.reset();
    todoModal.style.display = "none";
}


renderTodo(firstTodo);
renderTodo(secondTodo);
renderTodo(thirdTodo);
renderTodo(fourthTodo);
