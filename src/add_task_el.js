import {appendNewTask} from "./task_card_creation.js"
import {createTask} from "./task.js"
import {Project} from "./project.js"
import {updateTaskCountInAside} from "./project-stat-aside.js"

function addTaskEventListeners(portfolio){

  
  let new_task_form_dialog, new_project_form_dialog, btn_new_taks, btn_task_submit;

  updateTaskCountInAside(portfolio.getCurrentProject());
  new_task_form_dialog = document.querySelector("#task-form-dialog");
  new_project_form_dialog = new_project_form_dialog = document.querySelector("#project-form-dialog");
  btn_new_taks = document.querySelector("#btn-new-task");
  btn_task_submit = document.querySelector("#task-submit");

  btn_new_taks.addEventListener('click', () =>{
    new_task_form_dialog.showModal();
    new_task_form_dialog.backdrop = "true"
  });

  window.onclick = function(event) { closeFromAndReset(event) 
  }

  document.querySelector("body").addEventListener('keydown',(e) =>{
    if(e.code == 'Escape'){
      closeFromAndReset()
    }
})

  btn_task_submit.addEventListener('click', () => {
    newTaskDataCapture(portfolio.getCurrentProject())
    updateTaskCountInAside(portfolio.getCurrentProject());
  });
}

function closeFromAndReset(event = 0){

  let new_task_form_dialog, new_project_form_dialog;

  new_task_form_dialog = document.querySelector("#task-form-dialog");
  new_project_form_dialog = new_project_form_dialog = document.querySelector("#project-form-dialog");
  
  if(event)
  {
    if((event.target.id == "task-form-dialog") || (event.target == new_task_form_dialog)){
        resetInputValues();
        new_task_form_dialog.close();
      }
      else if((event.target.id == "project-form-dialog") || (event.target == new_project_form_dialog)){
        document.querySelector("#project-name").value = ""
        new_project_form_dialog.close()
      }
    } else {
        resetInputValues();
        new_task_form_dialog.close();
        document.querySelector("#project-name").value = ""
        new_project_form_dialog.close();
    }
}

function newTaskDataCapture(current_project){

  let title, desc, date, dd, mm, yy, prio;

  title = document.getElementById("title").value;
  desc = document.getElementById("description").value;
  dd = document.getElementById("dd").value;
  mm = document.getElementById("mm").value;
  yy = document.getElementById("yy").value;
  Array.from(document.getElementsByName("priority")).forEach( el => {
    if(el.checked){
        prio = el.value
    }});
  date = {dd,mm,yy}
  
  current_project.addTask(createTask({title, desc, date, prio}));
  
  resetInputValues();
  appendNewTask(current_project);
}

function resetInputValues(){
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("dd").value = ""
  document.getElementById("mm").value = ""
  document.getElementById("yy").value = ""
  document.getElementById("dd").placeholder = "DD"
  document.getElementById("mm").placeholder = "MM"
  document.getElementById("yy").placeholder = "YY"
  document.getElementById("low").checked = true;
}

export {addTaskEventListeners}