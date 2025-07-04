import nav from "./navbar"
import {Project} from "./project.js"
import {ToDoItem, captureTaskDetailsFromForm} from "./toDoItems.js"
import {createTaskListDOM} from "./task_list_display.js"

document.querySelector("body").appendChild(nav["nav"])

let p1 = new Project("Magic");

let item1 = new ToDoItem("create To Do App", "To create an application to track tasks", "4-6-25", "usual");
// item1.show();

let job = new ToDoItem("get a job", "find a company, an open position, and apply", "September 2025", "high");
// job.show()

p1.addTask(item1);
p1.addTask(job);

// (p1.getTasks()).forEach(task => {
//   console.log(task.priority())
// })

let tl = createTaskListDOM(p1);
document.querySelector("body").appendChild(tl);

let form_dialog = document.querySelector("dialog");
let btn_new_taks = document.querySelector("#btn-new-task");
let btn_task_submit = document.querySelector("#task-submit");
console.log(btn_task_submit);
btn_new_taks.addEventListener('click', () =>
  {form_dialog.show()})

btn_task_submit.addEventListener('click', preFunction)

function preFunction(){
  console.log(form_dialog)
  form_dialog.close();
  let title = document.getElementById("title").value
  let desc = document.getElementById("description").value
  let date = document.getElementById("date").value
  let prio = document.getElementById("priority").value
  p1.addTask(captureTaskDetailsFromForm({title, desc, date, prio}));
  document.querySelector("body").innerHTML = ""
  document.querySelector("body").appendChild(createTaskListDOM(p1));
}