import "./task_list.css"
import {createCardsForTasks, getTaskListDiv} from "./task_card_creation"
import {createDropdownForProjects} from "./project_dropdown_creation"

function createTaskListDOM(portfolio){

  let container, project_dropdown_div, task_list_div;

  container = document.createElement('div');
  container.setAttribute("class", 'container');

  project_dropdown_div = createDropdownForProjects(portfolio);
  task_list_div = createCardsForTasks( portfolio.getCurrentProject() );

  container.appendChild(project_dropdown_div);
  container.appendChild(task_list_div);

  return container
}

function swithTasksForProject(portfolio){

  let  task_list_div, new_task_btn, updated_task_list_div;

  task_list_div = document.querySelector(".task-list")
  new_task_btn = document.querySelector("#btn-new-task");
  console.log(` the input to create a new task list is ${(portfolio.getCurrentProject()).getName()}`);
  task_list_div.innerHTML = ""
  updated_task_list_div = getTaskListDiv(portfolio.getCurrentProject())
  Array.from(updated_task_list_div.childNodes).forEach( new_task => {
    task_list_div.appendChild(new_task)
  })
  task_list_div.appendChild(new_task_btn)
}

export {createTaskListDOM, swithTasksForProject}

