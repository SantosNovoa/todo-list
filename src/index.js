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
const titleDiv = document.querySelector(".title-div");
const descriptionDiv = document.querySelector(".description-div");
const dueDateDiv = document.querySelector(".due-date-div");
const priorityDiv = document.querySelector(".priority-div");
const projectDiv = document.querySelector(".project-div");
const projectContainer = document.querySelector(".project-container");
const projectName = document.getElementById("projectName");
const todoForm = document.getElementById("newTodo");
todoForm.addEventListener("submit", submitTodoForm);

//track the currentProject
let currentProject = null;

//track the the todo being edited by id
let editingTodoId = null;

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

// addTodoBtn.onclick = function () {
//   todoModal.style.display = "block";
// };

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

  //info button
  const info = document.createElement("i");
  info.className = "bi bi-info-circle";
  const infoBtn = document.createElement("button");
  infoBtn.className = "info";
  infoBtn.appendChild(info);
  rightSide.appendChild(infoBtn);

  //edit button
  const edit = document.createElement("i");
  edit.className = "bi bi-pencil-square";
  const editBtn = document.createElement("button");
  editBtn.className = "edit";
  editBtn.appendChild(edit);
  rightSide.appendChild(editBtn);

  //trash button
  const remove = document.createElement("i");
  remove.className = "bi bi-trash";
  const removeBtn = document.createElement("button");
  removeBtn.className = "remove";
  removeBtn.appendChild(remove);
  rightSide.appendChild(removeBtn);

  //appends all the buttons to the row
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

  //info button event listener and opens the info modal
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

  //edit button event listener and opens the edit modal
  editBtn.addEventListener("click", () => {
    //change the modal header
    const todoHeader = document.getElementById("todo-header");
    todoHeader.textContent = "";
    todoHeader.textContent = "Edit Task";

    todoModal.style.display = "block";

    const title = document.getElementById("title");
    title.value = todo.title;

    const description = document.getElementById("description");
    description.value = todo.description;

    const dueDate = document.getElementById("dueDate");
    dueDate.value = todo.dueDate;

    const priority = document.getElementById("priority");
    priority.value = todo.priority;

    const editTodoBtn = document.getElementById("todo-button");
    editTodoBtn.textContent = "";
    editTodoBtn.textContent = "Edit";

    //set editingTodoId to the current todo being edited this way we can track which todo is selected
    editingTodoId = todo.id;
  });

  //this code makes sure that the styling of the complete persists even after you've
  //clicked the completed tab on the sidebar
  if (todo.completed == true) {
    complete.classList.replace("bi-circle", "bi-check-circle");
    title.classList.add("task-done-text");
    newTodoRow.style.backgroundColor = "#d8d8d8";
  } else if (todo.completed == false) {
    complete.classList.replace("bi-check-circle", "bi-circle");
    title.classList.remove("task-done-text");
    newTodoRow.style.backgroundColor = "#fff";
  }
}

function removeTodo(todoId) {
  for (const project in projects) {
    const index = projects[project].findIndex((todo) => todo.id === todoId);
    if (index !== -1) {
      projects[project].splice(index, 1);
    }
  }
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
  const project = currentProject;

  if (!currentProject) {
    alert("Please select a project before adding a task.");
    return;
  }

  if (editingTodoId != null) {
    const index = projects[currentProject].findIndex(
      (todo) => todo.id === editingTodoId
    );

    if (index != -1) {
      const todo = projects[currentProject][index];
      todo.title = titleValue.value;
      todo.description = descriptionValue.value;
      todo.dueDate = dueDateValue.value;
      todo.priority = priorityValue.value;
    }

    filterTodosByProject(currentProject);
    editingTodoId = null;
    todoForm.reset();
    todoModal.style.display = "none";
    return;
  }
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
  filterTodosByProject(project);
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

  const maxLength = 22; //max number of characters in project-item

  if (projectItem.textContent.length > maxLength) {
    projectItem.textContent =
      projectItem.textContent.substring(0, maxLength) + "...";
  }

  projectItem.addEventListener("click", () => {
    clearActiveSidebar();
    projectItem.classList.add("active");
    filterTodosByProject(projectName);
  });
}

addProject("Default Project");
addProject("Default Project 2");

function filterTodosByProject(projectName) {
  todoContainer.innerHTML = "";

  const projectTitle = document.createElement("h1");
  projectTitle.className = "project-title";
  projectTitle.textContent = projectName;
  todoContainer.appendChild(projectTitle);

  currentProject = projectName;
  const addTaskBtn = document.createElement("button");
  addTaskBtn.textContent = "Add Task";
  addTaskBtn.className = "btn btn-primary mb-3";

  //prevents the user from adding a task to all completed or important sidebar status
  const specialViews = ["All", "Completed", "Important"];
  if (specialViews.includes(projectName)) {
    addTaskBtn.style.display = "none";
  }
  addTaskBtn.onclick = () => {
    todoModal.style.display = "block";
    const todoHeader = document.getElementById("todo-header")
    todoHeader.textContent = "New Task";
    const todoBtn = document.getElementById("todo-button");
    todoBtn.textContent = "Add Task";
    todoForm.reset();
  };

  todoContainer.appendChild(addTaskBtn);

  const todos = projects[projectName] || [];

  todos.forEach((todo) => renderTodo(todo));
}

function filterImportantTodos() {
  todoContainer.innerHTML = "";

  const projectTitle = document.createElement("h1");
  projectTitle.className = "project-title";
  projectTitle.textContent = "Important";
  todoContainer.appendChild(projectTitle);

  const todos = projects["All"] || [];

  todos.forEach((todo) => {
    if (todo.priority === "High") {
      renderTodo(todo);
    }
  });
}

function filterCompletedTodos() {
  todoContainer.innerHTML = "";

  const projectTitle = document.createElement("h1");
  projectTitle.className = "project-title";
  projectTitle.textContent = "Completed";
  todoContainer.appendChild(projectTitle);

  const todos = projects["All"] || [];

  todos.forEach((todo) => {
    if (todo.completed == true) {
      renderTodo(todo);
    }
  });
}

//renders all todos
const allprojectBtn = document.getElementById("all-project");
allprojectBtn.addEventListener("click", () => {
  clearActiveSidebar();
  allprojectBtn.classList.add("active");
  filterTodosByProject("All");
});
//renders only todos with the priority 'high'
const importantBtn = document.getElementById("important-project");
importantBtn.addEventListener("click", () => {
  clearActiveSidebar();
  importantBtn.classList.add("active");
  filterImportantTodos();
});
//renders complete todos
const completedBtn = document.getElementById("completed-project");
completedBtn.addEventListener("click", () => {
  clearActiveSidebar();
  completedBtn.classList.add("active");
  filterCompletedTodos();
});

addTodo(
  "Empty task title 1",
  "Test description with a lot of text to show the scroll bar.  Test description with a lot of text to show the scroll bar. Test description with a lot of text to show the scroll bar. ",
  "2025-05-12",
  "Medium",
  "Default Project 2"
);
addTodo(
  "Empty task title 2",
  "Test descrirption with a little bit of text.",
  "2025-05-29",
  "High",
  "Default Project"
);
addTodo(
  "Empty task title 3",
  "Test descrirption with a little bit of text.",
  "2025-06-05",
  "High",
  "Default Project 2"
);
addTodo(
  "Empty task title 4",
  "Test descrirption with a little bit of text.",
  "2025-05-06",
  "Low",
  "Default Project"
);

filterTodosByProject("Default Project");

function clearActiveSidebar() {
  document
    .querySelectorAll(".project-item, .sidebar-container-one span")
    .forEach((el) => el.classList.remove("active"));
}
