import { Project } from "./project.js"
import { Portfolio } from "./portfolio.js"
import { apendNewProject } from "./project_dropdown_creation.js"
import { swithTasksForProject } from "./task_list_display.js"
import { addTaskEventListeners } from "./add_task_el.js"

function newProjectELSetup(portfolio) {
  let new_project_form_dialog = document.querySelector("#project-form-dialog");
  let btn_new_project = document.querySelector("#btn-new-project");
  let btn_project_sumbmit = document.querySelector("#project-submit");

  btn_new_project.addEventListener("click", () => 
    {new_project_form_dialog.show()})

  btn_project_sumbmit.addEventListener("click", ()=>{newProjetDataCapture(portfolio)})
  addTaskEventListeners(portfolio);
}

function newProjetDataCapture(portfolio){
  let name_field = document.getElementById("project-name")
  let project_name = name_field.value;
  name_field.value = "";

  console.log(`Creating a new project called ${project_name}`);
  portfolio.addProject( new Project(project_name));
  apendNewProject(portfolio);
  addProjectEventListeners(portfolio, false);
}

function addProjectEventListeners(portfolio, setup = true){
  if(setup){
    newProjectELSetup(portfolio);
  }
  let new_project_btn = document.querySelector(".existing-projects").lastChild;
    new_project_btn.addEventListener('click', ()=>{
      console.log(`btn clicked was ${new_project_btn.innerHTML}`)
      if( (portfolio.getCurrentProject()).getName() == new_project_btn.innerHTML){
        console.log(`Already on ${new_project_btn.innerHTML}`)

      } else{
        let target_project = portfolio.getProjectByName(new_project_btn.innerHTML);
        portfolio.setCurrentProject(target_project);
        console.log(`Current project set to ${(portfolio.getCurrentProject()).getName()}`);
        console.log(`switching: ${!setup}`)
        swithTasksForProject(portfolio);
      }
  });
}

export {addProjectEventListeners}

