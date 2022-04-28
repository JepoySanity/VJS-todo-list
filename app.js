window.addEventListener("load", function () {
  let taskForm = document.querySelector("#task-form");
  let taskInput = document.querySelector(".task-input");
  let tasks = document.querySelector(".tasks");

  taskForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!taskInput.value) {
      alert("required input");
    } else {
      //task parent div
      const task = document.createElement("div");
      task.className = "task";
      //task input
      const taskContent = document.createElement("input");
      taskContent.className = "task-content";
      taskContent.value = taskInput.value;
      taskContent.setAttribute("readonly", "readonly");
      //actions button wrapper
      const btnWrapper = document.createElement("div");
      btnWrapper.className = "btn-wrapper";
      //edit button
      let editBtn = document.createElement("button");
      editBtn.classList.add("edit");
      editBtn.classList.add("action-btn");
      editBtn.innerHTML = "EDIT";
      //delete button
      const delBtn = document.createElement("button");
      delBtn.classList.add("delete");
      delBtn.classList.add("action-btn");
      delBtn.innerHTML = "DELETE";
      //append the new elements created
      tasks.appendChild(task);
      task.appendChild(taskContent);
      task.appendChild(btnWrapper);
      btnWrapper.appendChild(editBtn);
      btnWrapper.appendChild(delBtn);
      //input reset upon creating new task
      taskInput.value = "";
      taskInput.focus();

      //edit button event
      editBtn.addEventListener("click", function (e) {
        e.preventDefault();
        if (editBtn.innerHTML === "EDIT") {
          taskContent.removeAttribute("readonly");
          taskContent.focus();
          editBtn.innerHTML = "SAVE";
        } else {
          taskContent.setAttribute("readonly", "readonly");
          editBtn.innerHTML = "EDIT";
        }
      });

      //delete button event
      delBtn.addEventListener("click", function (e) {
        e.preventDefault();
        let confirmAction = confirm("are you sure?");
        if (!confirmAction) return;
        task.remove();
      });
    }
  });
});
