import { Project } from "./project.js"
import { Portfolio } from "./portfolio.js"
import { apendNewProject } from "./project_dropdown_creation.js"
import { swithTasksForProject } from "./task_list_display.js"
import { addTaskEventListeners } from "./add_task_el.js"
import {showProjectDetails} from "./project-stat-aside.js"

function newProjectELSetup(portfolio) {
  
  let new_project_form_dialog, btn_new_project, btn_project_sumbmit;
  
  new_project_form_dialog = document.querySelector("#project-form-dialog");
  btn_new_project = document.querySelector("#btn-new-project");
  btn_project_sumbmit = document.querySelector("#project-submit");

  btn_new_project.innerHTML = "+"

  btn_new_project.addEventListener("click", () => 
    {new_project_form_dialog.showModal()})

  btn_new_project.addEventListener("mouseover",()=>{
    btn_new_project.innerHTML = "Create New Project"
  })

  btn_new_project.addEventListener("mouseout",()=>{
    btn_new_project.innerHTML = "+"
  })

  btn_project_sumbmit.addEventListener("click", ()=>{newProjetDataCapture(portfolio)})
  addTaskEventListeners(portfolio);
}

function newProjetDataCapture(portfolio){

  let name_field, project_name;
  
  name_field = document.getElementById("project-name")
  project_name = name_field.value;
  name_field.value = "";

  portfolio.addProject( new Project(project_name));
  apendNewProject(portfolio);
  addProjectEventListeners(portfolio, false);
}

function addProjectEventListeners(portfolio, setup = true){
  
  let new_project_btn, n =  0;

  if(setup){
    newProjectELSetup(portfolio);
  }
  new_project_btn = document.querySelector(".existing-projects").lastChild;
  new_project_btn.addEventListener('click', (ev)=>{
    if( (portfolio.getCurrentProject()).getName() == new_project_btn.innerHTML){
      showProjectDetails(`${Math.pow((-1),n)}`);
      n++;
      } else {
      let target_project = portfolio.getProjectByName(new_project_btn.innerHTML);
      portfolio.setCurrentProject(target_project);
      switchProjectNameDisplay(ev)
      swithTasksForProject(portfolio);
    }
  });
}

function switchProjectNameDisplay(ev){
  
  let current_project_button, existing_projects;

  current_project_button= ev.target
  existing_projects = document.querySelector(".existing-projects");
  existing_projects.removeChild(current_project_button);
  existing_projects.insertBefore(current_project_button, existing_projects.firstChild);
}

export {addProjectEventListeners}
