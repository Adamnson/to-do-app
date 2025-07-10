import "./task_list.css"
import {createCardsForTasks, getTaskListDiv} from "./task_card_creation"
import {createDropdownForProjects} from "./project_dropdown_creation"
import {projectStatAside, updateTaskCountInAside} from "./project-stat-aside.js"

function createTaskListDOM(portfolio){

  let nav, container, project_dropdown_div, task_list_div;

  nav = document.querySelector('nav');
  container = document.createElement('div');
  container.setAttribute("class", 'container');

  project_dropdown_div = createDropdownForProjects(portfolio);
  task_list_div = createCardsForTasks( portfolio.getCurrentProject() );

  nav.appendChild(project_dropdown_div);
  document.querySelector("body").appendChild(projectStatAside());
  container.appendChild(task_list_div);

  return container
}

function swithTasksForProject(portfolio){

  let  task_list_div, new_task_btn, updated_task_list_div, current_project;

  current_project = portfolio.getCurrentProject();
  task_list_div = document.querySelector(".task-list")
  new_task_btn = document.querySelector("#btn-new-task");
  task_list_div.innerHTML = ""
  updated_task_list_div = getTaskListDiv(current_project)
  Array.from(updated_task_list_div.childNodes).forEach( new_task => {
    task_list_div.appendChild(new_task)
  })
  task_list_div.appendChild(new_task_btn)
  updateTaskCountInAside(portfolio.getCurrentProject())
}

export {createTaskListDOM, swithTasksForProject}
