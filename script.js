const tasksContainer = document.getElementById("tasksContainer");
const taskInput = document.getElementById("taskInput");
const taskCount = document.getElementById("taskCount");
const clearCompletedButton = document.getElementById("clearCompletedButton");

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const taskItem = document.createElement("div");
    taskItem.className = "taskItem";
    taskItem.innerHTML = `
      <span class="taskText">${taskText}</span>
      <button class="deleteButton" onclick="deleteTask(this)">Delete</button>
    `;
    tasksContainer.appendChild(taskItem);
    taskInput.value = "";
    updateTaskCount();
  }
}

// Function to delete a task
function deleteTask(deleteButton) {
  const taskItem = deleteButton.parentNode;
  taskItem.remove();
  updateTaskCount();
}

// Function to clear all completed tasks
function clearCompletedTasks() {
  const completedTasks = document.querySelectorAll(".taskItem.completed");
  completedTasks.forEach((taskItem) => taskItem.remove());
  updateTaskCount();
}

// Function to update the task count
function updateTaskCount() {
  const totalTasks = tasksContainer.children.length;
  const completedTasks = document.querySelectorAll(
    ".taskItem.completed"
  ).length;
  const remainingTasks = totalTasks - completedTasks;
  taskCount.textContent = `${remainingTasks} task${
    remainingTasks !== 1 ? "s" : ""
  } left`;
}

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const taskItem = document.createElement("div");
    taskItem.className = "taskItem";
    taskItem.innerHTML = `
        <span class="taskText">${taskText}</span>
        <button class="markCompletedButton" onclick="markCompleted(this)">Mark Completed</button>
        <button class="deleteButton" onclick="deleteTask(this)">Delete</button>
      `;
    tasksContainer.appendChild(taskItem);
    taskInput.value = "";
    updateTaskCount();
  }
}

// Function to mark a task as completed or undo the completion
function markCompleted(markCompletedButton) {
  const taskItem = markCompletedButton.parentNode;
  taskItem.classList.toggle("completed");
  const taskText = taskItem.querySelector(".taskText");
  const isCompleted = taskItem.classList.contains("completed");
  taskText.style.textDecoration = isCompleted ? "line-through" : "none";
  updateTaskCount();
}

// Event listener for adding a new task
taskInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

// Event listener for marking a task as completed
tasksContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("taskText")) {
    markCompleted(event.target);
  }
});

// Event listener for clearing completed tasks
clearCompletedButton.addEventListener("click", function () {
  clearCompletedTasks();
});
