import {appendNewTask} from "./task_card_creation.js"
import {createTask} from "./task.js"
import {Project} from "./project.js"

function addTaskEventListeners(portfolio){

  let new_task_form_dialog, btn_new_taks, btn_task_submit;

  new_task_form_dialog = document.querySelector("#task-form-dialog");
  btn_new_taks = document.querySelector("#btn-new-task");
  btn_task_submit = document.querySelector("#task-submit");

  btn_new_taks.addEventListener('click', () =>{
    new_task_form_dialog.show();
  });

  btn_task_submit.addEventListener('click', () => {
    newTaskDataCapture(portfolio.getCurrentProject())
  });
}

function newTaskDataCapture(current_project){

  let title, desc, date, prio;

  title = document.getElementById("title").value;
  desc = document.getElementById("description").value;
  date = document.getElementById("date").value;
  prio = document.getElementById("priority").value;
  
  current_project.addTask(createTask({title, desc, date, prio}));
  
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("date").value = "";
  document.getElementById("priority").value = "";
  
  appendNewTask(current_project);
}

export {addTaskEventListeners}