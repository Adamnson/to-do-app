import nav from "./navbar"
import { Portfolio } from "./portfolio.js"
import {Project} from "./project.js"
import {Task, createTask} from "./task.js"
import {createTaskListDOM} from "./task_list_display.js"

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

let form_dialog = document.querySelector("dialog");
let btn_new_taks = document.querySelector("#btn-new-task");
let btn_task_submit = document.querySelector("#task-submit");
btn_new_taks.addEventListener('click', () =>
  {form_dialog.show()})

btn_task_submit.addEventListener('click', preFunction)

function preFunction(){

  let title = document.getElementById("title").value
  let desc = document.getElementById("description").value
  let date = document.getElementById("date").value
  let prio = document.getElementById("priority").value
  p1.addTask(createTask({title, desc, date, prio}));
  document.querySelector("body").appendChild(createTaskListDOM(p1));
}