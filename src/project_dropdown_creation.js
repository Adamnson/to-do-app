import "./project_dropdown.css"
import {createNewProjectForm} from "./new_project_form.js"

function createDropdownForProjects(portfolio){

  let project_dropdown_div, existing_projects_div, project_list;

  project_dropdown_div = document.createElement("div");
  project_dropdown_div.setAttribute("class", "dropdown");
  existing_projects_div = document.createElement("div");
  existing_projects_div.setAttribute('class', "existing-projects");
  project_list = portfolio.getProjects();

  for(let j = 0; j < project_list.length; j++){
    existing_projects_div.appendChild(createProjectButton(project_list[j]))
  }

  project_dropdown_div.appendChild(existing_projects_div);
  project_dropdown_div.appendChild(createBlankProject());
  document.querySelector("body").appendChild( createNewProjectForm() );

  return project_dropdown_div;
}

function apendNewProject(portfolio){

  let existing_projects_div, project_list, new_project;

  existing_projects_div = document.querySelector(".existing-projects");

  if(!existing_projects_div){
    throw Error("No Projects exist to be able to append to");
  }

  project_list = portfolio.getProjects();
  new_project = project_list[project_list.length - 1];
  existing_projects_div.appendChild(createProjectButton(new_project));
}

function createProjectButton(project){
  
  let btn_project = document.createElement("button")
  btn_project.setAttribute('class', "project");
  btn_project.innerHTML = project.getName();

  return btn_project;
}

function createBlankProject(){
  
  let btn_new_project = document.createElement("button")
  btn_new_project.setAttribute('id', "btn-new-project");

  return btn_new_project;
}

export {createDropdownForProjects, apendNewProject}
