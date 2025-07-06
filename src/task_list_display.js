import "./task_list.css"
import {createCardsForTasks} from "./task_card_creation"
import {createDropdownForProjects} from "./project_dropdown_creation"

function createTaskListDOM(portfolio){

  let existing_container = document.querySelector(".container")
  if (existing_container){
    existing_container.innerHTML = ""
  }

  let container = document.createElement('div');
  container.setAttribute("class", 'container');

  let project_dropdown_div = createDropdownForProjects(portfolio)

  let task_list_div = createCardsForTasks(  portfolio.getCurrentProject() )

  container.appendChild(project_dropdown_div);
  container.appendChild(task_list_div);

  return container
}

export {createTaskListDOM}

