import { nav } from "./navbar"
import { Portfolio } from "./portfolio.js"
import { Project } from "./project.js"
import { Task } from "./task.js"
import { createTaskListDOM } from "./task_list_display.js"
import { addProjectEventListeners } from "./add_project_el.js"
import "./style.css"

let portfolio, p1, item1, job, tl, date, landing_page;

document.querySelector("body").appendChild(nav)
portfolio = new Portfolio("Briefcase");

p1 = new Project("Magic");
portfolio.addProject(p1);

date = {dd: 4, mm: 12, yy: 25}
item1 = new Task("To do app", `1.date progress bar in cards\n2.Rock Pile up for tasks in navbar`,  date,"low");
date = {dd: 23, mm: 10, yy: 22}
job = new Task("Library App", "1.Styling of content\n\n2.Styling", date, "medium");
date = {dd: 1, mm: 8, yy: 25}
landing_page =new Task("Edit task" ,`display form to capture task edit`, date, "high")

p1.addTask(item1);
p1.addTask(job);
p1.addTask(landing_page)

tl = createTaskListDOM(portfolio);
document.querySelector("body").appendChild(tl);
addProjectEventListeners(portfolio);
