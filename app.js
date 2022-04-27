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

      const btnDiv = document.createElement("div");
      btnDiv.className = "btn-wrapper";
      const editBtn = document.createElement("button");
      editBtn.classList.add("edit");
      editBtn.classList.add("action-btn");
      editBtn.innerHTML = "EDIT";

      const delBtn = document.createElement("button");
      delBtn.classList.add("delete");
      delBtn.classList.add("action-btn");
      delBtn.innerHTML = "DELETE";

      btnDiv.appendChild(editBtn);
      btnDiv.appendChild(delBtn);
      taskEl.appendChild(btnDiv);

      taskText.setAttribute("readonly", "readonly");
      taskInput.value = "";
      taskInput.focus();
    }
  });
});
