import "./styles.css";

console.log("hello world");

const addTodoBtn = document.getElementById("todoBtn");
const todoModal = document.querySelector(".modal");
const todoCloseBtn = document.getElementById("todo-close");
const closeBtnTodo = document.getElementById("close-btn-todo");
const projectModal = document.getElementById("newProjectModal");
const projectCloseBtn = document.getElementById("project-close");
const addProjectBtn = document.getElementById("project-btn");
const closeBtnProject = document.getElementById("close-btn-project");
const todoContainer = document.querySelector(".todo-container");
const titleValue = document.getElementById("title");
const descriptionValue = document.getElementById("description");
const dueDateValue = document.getElementById("dueDate");
const priorityValue = document.getElementById("priority");
const projectValue = document.getElementById("taskProject");
const titleDiv = document.querySelector(".title-div");
const descriptionDiv = document.querySelector(".description-div");
const dueDateDiv = document.querySelector(".due-date-div");
const priorityDiv = document.querySelector(".priority-div");
const projectDiv = document.querySelector(".project-div");
const projectContainer = document.querySelector(".project-container");
const projectBtn = document.getElementById("project-btn");
const projectName = document.getElementById("projectName");
const todoForm = document.getElementById("newTodo");
const dropdownProject = document.getElementById("taskProject");
todoForm.addEventListener("submit", submitTodoForm);

const projectForm = document.getElementById("newProjectForm");
projectForm.addEventListener("submit", submitProjectForm);

console.log(todoForm);

const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".content-container");
document.getElementById("sidebar-toggle").addEventListener("click", () => {
  sidebar.classList.toggle("closed");
  container.classList.toggle("sidebar-collapsed");
});

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
    this.completed = false;
  }
}

function addTodo(title, description, dueDate, priority, project) {
  const newTodo = new TodoItem(title, description, dueDate, priority, project);

  if (!projects[project]) {
    projects[project] = [];
  }

  projects[project].push(newTodo);
  projects.All.push(newTodo);
  console.log(projects[project]);

  renderTodo(newTodo);
}

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
  leftSide.appendChild(title);

  const description = document.createElement("div");
  description.textContent = todo.description;
  description.className = "description";

  newTodoRow.appendChild(leftSide);

  const dueDate = document.createElement("div");
  dueDate.textContent = todo.dueDate;
  dueDate.className = "due-date";

  rightSide.appendChild(dueDate);

  const priority = document.createElement("div");
  priority.textContent = todo.priority;
  priority.className = "priority";

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

  const info = document.createElement("i");
  info.className = "bi bi-info-circle";
  const infoBtn = document.createElement("button");
  infoBtn.className = "info";
  infoBtn.appendChild(info);
  rightSide.appendChild(infoBtn);
  newTodoRow.appendChild(rightSide);

  const infoModal = document.getElementById("infoModal");
  const infoModalBody = document.getElementById("info-modal-body");
  const infoClose = document.getElementById("info-close");
  const closeInfoBtn = document.getElementById("close-btn-task-info");

  closeInfoBtn.onclick = function () {
    infoModal.style.display = "none";
  };

  infoClose.onclick = function () {
    infoModal.style.display = "none";
  };

  infoBtn.onclick = function () {
    infoModal.style.display = "block";

    //clear previous contents of the div's
    titleDiv.innerHTML = "";
    descriptionDiv.innerHTML = "";
    dueDateDiv.innerHTML = "";
    priorityDiv.innerHTML = "";
    projectDiv.innerHTML = "";

    //title content
    const titleLabelSpan = document.createElement("span");
    titleLabelSpan.textContent = "Title: ";
    titleLabelSpan.className = "info-span";
    titleDiv.appendChild(titleLabelSpan);
    const titleSpan = document.createElement("span");
    titleSpan.className = "info-task";
    titleSpan.textContent = todo.title;
    titleDiv.appendChild(titleSpan);

    //description content
    const descriptionLabelSpan = document.createElement("span");
    descriptionLabelSpan.textContent = "Description: ";
    descriptionLabelSpan.className = "info-span";
    descriptionDiv.appendChild(descriptionLabelSpan);
    const descriptionSpan = document.createElement("span");
    descriptionSpan.className = "info-task desc";
    descriptionSpan.textContent = todo.description;
    descriptionDiv.appendChild(descriptionSpan);

    //dueDate content
    const dueDateLabelSpan = document.createElement("span");
    dueDateLabelSpan.textContent = "Due date: ";
    dueDateLabelSpan.className = "info-span";
    dueDateDiv.appendChild(dueDateLabelSpan);
    const dueDateSpan = document.createElement("span");
    dueDateSpan.className = "info-task";
    dueDateSpan.textContent = todo.dueDate;
    dueDateDiv.appendChild(dueDateSpan);

    //priority content
    const priorityLabelSpan = document.createElement("span");
    priorityLabelSpan.textContent = "Priority: ";
    priorityLabelSpan.className = "info-span";
    priorityDiv.appendChild(priorityLabelSpan);
    const prioritySpan = document.createElement("span");
    prioritySpan.className = "info-task";
    prioritySpan.textContent = todo.priority;
    priorityDiv.appendChild(prioritySpan);

    const projectLabelSpan = document.createElement("span");
    projectLabelSpan.textContent = "Project: ";
    projectLabelSpan.className = "info-span";
    projectDiv.appendChild(projectLabelSpan);
    const projectSpan = document.createElement("span");
    projectSpan.className = "info-task";
    projectSpan.textContent = todo.project;
    projectDiv.appendChild(projectSpan);
  };

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
      todo.completed = true;
    } else {
      complete.classList.replace("bi-check-circle", "bi-circle");
      title.classList.remove("task-done-text");
      newTodoRow.style.backgroundColor = "#fff";
      todo.completed = false;
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
  const project = projectValue.value;

  addTodo(title, description, dueDate, priority, project);
  todoForm.reset();
  todoModal.style.display = "none";
}

function submitProjectForm(e) {
  e.preventDefault();

  if (!projectForm.checkValidity()) {
    projectForm.reportValidity();
    return;
  }

  const project = projectName.value;
  addProject(project);
  projectForm.reset();
  projectModal.style.display = "none";
}

const projects = {
  All: [],
};

function addProject(name) {
  if (!projects[name]) {
    projects[name] = [];
    renderProject(name);
  }
}

function renderProject(projectName) {
  const projectItem = document.createElement("div");
  projectItem.textContent = projectName;
  projectItem.classList.add("project-item");
  projectContainer.appendChild(projectItem);

//update the dropdown menu for the add to do form
  const dropdownItem = document.createElement("option");
  dropdownItem.value = projectName;
  dropdownItem.textContent = projectName;
  dropdownProject.appendChild(dropdownItem);

  projectItem.addEventListener("click", () => {
    filterTodosByProject(projectName);
  });
}

addProject("Default Project")
addProject("Default Project 2")

function filterTodosByProject(projectName) {
  todoContainer.innerHTML = "";

  const projectTitle = document.createElement("h1");
  projectTitle.className = "project-title"
  projectTitle.textContent = projectName;
  todoContainer.appendChild(projectTitle);

  const todos = projects[projectName] || [];

  todos.forEach((todo) => renderTodo(todo));
}

function filterImportantTodos() {
  todoContainer.innerHTML = "";

  const projectTitle = document.createElement("h1");
  projectTitle.className = "project-title"
  projectTitle.textContent = "Important";
  todoContainer.appendChild(projectTitle);

  const todos = projects["All"] || [];

  todos.forEach((todo) =>{
    if (todo.priority === "High") {
      renderTodo(todo)
    }
  });
}



document.getElementById("all-project").addEventListener("click", () => {
  filterTodosByProject("All");
});

document.getElementById("important-project").addEventListener("click", () => {
  filterImportantTodos();
});

addTodo(
  "Need to start going to the Gym",
  "I want to go to the gym and get strong",
  "2025-05-12",
  "Medium",
  "Default Project 2"
);
addTodo(
  "I want to read more books",
  "I want to finish the book Demon Haunted World",
  "2025-05-29",
  "High",
  "Default Project"
);
addTodo(
  "Get that associates degree to transfer to a 4-year",
  "I want graduate with my Associate of Science",
  "2025-06-05",
  "High",
  "Default Project 2"
);
addTodo(
  "I want to play some videogames over the summer",
  "I want to play a lot of games",
  "2025-05-06",
  "Low",
  "Default Project"
);

filterTodosByProject("Default Project");
