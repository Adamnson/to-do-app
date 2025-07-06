import { nav } from "./navbar"
import { Portfolio } from "./portfolio.js"
import { Project } from "./project.js"
import { Task } from "./task.js"
import { createTaskListDOM } from "./task_list_display.js"
import { addProjectEventListeners } from "./add_project_el.js"

let portfolio, p1, item1, job, tl;

document.querySelector("body").appendChild(nav)
portfolio = new Portfolio("Briefcase");

p1 = new Project("Magic");
portfolio.addProject(p1);

item1 = new Task("create To Do App", "To create an application to track tasks", "4-6-25", "usual");
job = new Task("get a job", "find a company, an open position, and apply", "September 2025", "high");

p1.addTask(item1);
p1.addTask(job);

tl = createTaskListDOM(portfolio);
document.querySelector("body").appendChild(tl);
addProjectEventListeners(portfolio);
