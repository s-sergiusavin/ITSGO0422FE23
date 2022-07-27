const submitButton = document.querySelector(".submitButton");
const taskInputField = document.querySelector(".taskInput");
const taskList = document.querySelector(".taskList");

let taskNumber = 0;
submitButton.addEventListener("mouseover", function () {
  submitButton.style.cursor = "pointer";
});
taskInputField.placeholder = "enter task";

function addTask(string) {
  if (taskNumber < 3) {
    const task = document.createElement("li");
    task.innerHTML = string;
    task.className = "task";
    taskList.appendChild(task);
    taskNumber++;
    taskInputField.placeholder = "Add task...";
    if (taskNumber === 3) {
      taskInputField.disabled = true;
      taskInputField.value = "";
      taskInputField.placeholder = "work time";
      submitButton.innerHTML = "timer";
      submitButton.style.color = "red";
    }
    task.addEventListener("dblclick", function () {
      taskList.removeChild(this);
      taskNumber--;
      taskInputField.disabled = false;
      submitButton.innerHTML = "add_circle";
      submitButton.style.color = "black";
      taskInputField.placeholder = "Add task...";
    });
  }
}

submitButton.addEventListener("click", function () {
  if (taskNumber === 3) {
    alert("Maximum tasks reached! Complete one or more tasks to add more!");
  } else {
    if (taskInputField.value) {
      addTask(taskInputField.value);
    } else alert("Add task before sending!");
  }
});

taskInputField.addEventListener("keypress", function (e) {
  if (e.keyCode === 13 && taskInputField.value) {
    e.preventDefault();
    addTask(taskInputField.value);
    taskInputField.value = "";
  }
});
taskInputField.addEventListener("focus", function () {
  taskInputField.placeholder = "";
});

taskInputField.addEventListener("blur", function () {
  if (!taskInputField.value) taskInputField.placeholder = "enter task";
});
console.dir(taskInputField);
