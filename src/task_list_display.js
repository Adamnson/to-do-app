import "./task_list.css"
import {createCardsForTasks} from "./task_card_creation"

function createTaskListDOM(portfolio){

  let existing_container = document.querySelector(".container")
  if (existing_container){
    existing_container.innerHTML = ""
  }

  let container = document.createElement('div');
  container.setAttribute("class", 'container');

  let project_dropdown_div = document.createElement("div");
  project_dropdown_div.setAttribute("class", "dropdown");
  let project_list = portfolio.getProjects();

  for(let j = 0; j < project_list.length; j++){
    project_dropdown_div.appendChild(createProjectButton(project_list[j]))
  }

  project_dropdown_div.appendChild(createBlankProject());

  let task_list_div = createCardsForTasks(  portfolio.getCurrentProject() )

  container.appendChild(project_dropdown_div);
  container.appendChild(task_list_div);

  return container
}

function createProjectButton(project){
  
  let btn_project = document.createElement("button")
  btn_project.setAttribute('class', "project");
  btn_project.innerHTML = project.getName();

  return btn_project;
}

function createBlankProject(){
   let btn_new_project = document.createElement("button")
  btn_new_project.setAttribute('id', "new-project");
  btn_new_project.innerHTML = "Create New Project";

  return btn_new_project;
}

export {createTaskListDOM}

