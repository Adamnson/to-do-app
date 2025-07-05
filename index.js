import nav from "./navbar"
import { Portfolio } from "./portfolio.js"
import {Project} from "./project.js"
import {Task, createTask} from "./task.js"
import {createTaskListDOM} from "./task_list_display.js"
import {appendNewTask} from "./task_card_creation.js"

document.querySelector("body").appendChild(nav["nav"])
let portfolio = new Portfolio("Briefcase");


let p1 = new Project("Magic");
portfolio.addProject(p1);
let item1 = new Task("create To Do App", "To create an application to track tasks", "4-6-25", "usual");

let job = new Task("get a job", "find a company, an open position, and apply", "September 2025", "high");

p1.addTask(item1);
p1.addTask(job);


let tl = createTaskListDOM(portfolio);
document.querySelector("body").appendChild(tl);

let new_project_form_dialog = document.querySelector("#project-form-dialog");
let btn_new_project = document.querySelector("#btn-new-project");
let btn_project_sumbmit = document.querySelector("#project-submit");

btn_new_project.addEventListener("click", () => 
  {new_project_form_dialog.show()})

btn_project_sumbmit.addEventListener("click", newProjetDataCapture)

function newProjetDataCapture(){
  let project_name = document.getElementById("project-name").value;
  console.log(`Creating a new project called ${project_name}`);
  portfolio.addProject( new Project(project_name));
    document.querySelector("body").appendChild(createTaskListDOM(portfolio));

}

let new_task_form_dialog = document.querySelector("#task-form-dialog");
let btn_new_taks = document.querySelector("#btn-new-task");
let btn_task_submit = document.querySelector("#task-submit");

btn_new_taks.addEventListener('click', () =>
  {new_task_form_dialog.show()})

btn_task_submit.addEventListener('click', newTaskDataCapture)

function newTaskDataCapture(){

  let title = document.getElementById("title").value
  let desc = document.getElementById("description").value
  let date = document.getElementById("date").value
  let prio = document.getElementById("priority").value
  p1.addTask(createTask({title, desc, date, prio}));
  appendNewTask(p1);
  // document.querySelector("body").appendChild(createTaskListDOM(portfolio));
}