import "./task_list.css"
import {createCardsForTasks} from "./task_card_creation"
import {createDropdownForProjects} from "./project_dropdown_creation"

function createTaskListDOM(portfolio){

  let container = document.createElement('div');
  container.setAttribute("class", 'container');

  let project_dropdown_div = createDropdownForProjects(portfolio);
  let task_list_div = createCardsForTasks( portfolio.getCurrentProject() );

  container.appendChild(project_dropdown_div);
  container.appendChild(task_list_div);

  return container
}

function swithTasksForProject(portfolio){
  let container = document.querySelector(".container");
  let project_dropdown_div = document.querySelector(".dropdown");
  let new_task_btn = document.querySelector("#btn-new-task");
  console.log(` the input to create a new task list is ${(portfolio.getCurrentProject()).getName()}`);
  container.innerHTML = "";
  container.appendChild(project_dropdown_div);
  container.appendChild(createCardsForTasks(portfolio.getCurrentProject(), true));
  container.appendChild(new_task_btn);
}

export {createTaskListDOM, swithTasksForProject}

