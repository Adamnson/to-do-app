
import {appendNewTask} from "./task_card_creation.js"
import {createTask} from "./task.js"


function addTaskEventListeners(current_project){
  let new_task_form_dialog = document.querySelector("#task-form-dialog");
  let btn_new_taks = document.querySelector("#btn-new-task");
  let btn_task_submit = document.querySelector("#task-submit");

  btn_new_taks.addEventListener('click', () =>
    {new_task_form_dialog.show()})

  btn_task_submit.addEventListener('click', () => {newTaskDataCapture(current_project)})
}

function newTaskDataCapture(p1){

  let title = document.getElementById("title").value;
  let desc = document.getElementById("description").value;
  let date = document.getElementById("date").value;
  let prio = document.getElementById("priority").value;
  p1.addTask(createTask({title, desc, date, prio}));
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("date").value = "";
  document.getElementById("priority").value = "";
  appendNewTask(p1);
}

export {addTaskEventListeners}