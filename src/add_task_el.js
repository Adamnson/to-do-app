import {appendNewTask} from "./task_card_creation.js"
import {createTask} from "./task.js"
import {Project} from "./project.js"

function addTaskEventListeners(portfolio){

  let new_task_form_dialog, btn_new_taks, btn_task_submit;

  new_task_form_dialog = document.querySelector("#task-form-dialog");
  btn_new_taks = document.querySelector("#btn-new-task");
  btn_task_submit = document.querySelector("#task-submit");

  btn_new_taks.addEventListener('click', () =>{
    new_task_form_dialog.showModal();
    new_task_form_dialog.backdrop = "true"
  });

  window.onclick = function(event) {
    if((event.target.id == "task-form-dialog") || (event.target == new_task_form_dialog)){
      console.log("click captured")
    }
  }

  btn_task_submit.addEventListener('click', () => {
    newTaskDataCapture(portfolio.getCurrentProject())
  });
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
    console.log(prio);
  date = {dd,mm,yy}
  
  current_project.addTask(createTask({title, desc, date, prio}));
  
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("dd").value = ""
  document.getElementById("mm").value = ""
  document.getElementById("yy").value = ""
  document.getElementById("dd").placeholder = "DD"
  document.getElementById("mm").placeholder = "MM"
  document.getElementById("yy").placeholder = "YY"
  // document.getElementById("priority").value = "";
  
  appendNewTask(current_project);
}

export {addTaskEventListeners}