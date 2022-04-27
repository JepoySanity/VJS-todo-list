window.addEventListener("load", function () {
  let taskForm = document.querySelector("#task-form");
  let taskInput = document.querySelector(".task-input");
  let tasks = document.querySelector(".tasks");

  taskForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!taskInput.value) {
      alert("required input");
    } else {
      const taskEl = document.createElement("div");
      taskEl.className = "task";
      const taskText = document.createElement("input");
      taskText.className = "task-content";
      taskText.value = taskInput.value;

      taskEl.appendChild(taskText);
      tasks.appendChild(taskEl);

      taskInput.value = "";
      taskText.setAttribute("readonly", "readonly");

      // taskInput.focus();
    }
  });
});
