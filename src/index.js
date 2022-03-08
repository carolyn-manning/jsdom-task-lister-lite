document.addEventListener("DOMContentLoaded", () => {
  
  const taskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  // const newTaskPriority = document.getElementById("new-task-priority");

  const tasksList = document.getElementById("tasks");

  taskForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const taskItem = document.createElement("li");
    const deleteButton = document.createElement("button");
    taskItem.innerText = newTaskDescription.value;
    deleteButton.innerText= "X";
    deleteButton.dataset.action = "delete";
    taskItem.appendChild(deleteButton)
    tasksList.appendChild(taskItem);
    taskForm.reset()
  });

  tasksList.addEventListener("click", function(e) {
    if (e.target.dataset.action === "delete") {
      e.target.parentElement.remove()
    };

  });

  
});