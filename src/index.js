import "./navbar.css"
import nav from "./navbar"
import {Project, createTaskListDOM} from "./project.js"
import {ToDoItem} from "./toDoItems.js"

console.log(nav["nav"])
document.querySelector("body").appendChild(nav["nav"])

let p1 = new Project("Magic");
console.log(p1.getName())

let item1 = new ToDoItem("create To Do App", "To create an application to track tasks", "4-6-25", "usual");
// item1.show();

let job = new ToDoItem("get a job", "find a company, an open position, and apply", "September 2025", "high");
// job.show()

p1.addTask(item1);
p1.addTask(job);

(p1.getTasks()).forEach(task => {
  task.show()
})

document.querySelector("body").appendChild(createTaskListDOM(p1))