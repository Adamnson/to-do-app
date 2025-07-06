import "./project_dropdown.css"

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

function createNewProjectForm(){

  let form_dialog, form,form_field_div, form_field, form_label, btn_sumbit;

  form_dialog = document.createElement('dialog');
  form_dialog.setAttribute('id', "project-form-dialog");
  form = document.createElement('form');
  form.setAttribute("method", "dialog");

  form_field_div = document.createElement('div');
  form_field = document.createElement("input");
  form_field.type = "text"
  form_field.setAttribute('id', `project-name`);
  form_label = document.createElement('label');
  form_label.setAttribute("for", `project-name`);
  form_label.innerHTML = "Project Name"
  form_field_div.appendChild(form_label);
  form_field_div.appendChild(form_field);

  btn_sumbit = document.createElement("button");
  btn_sumbit.setAttribute('id', "project-submit");
  btn_sumbit.innerHTML = "Create Project"

  form.appendChild(form_field_div);
  form.appendChild(btn_sumbit);
  form_dialog.appendChild(form);

  return form_dialog;
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
  btn_new_project.innerHTML = "Create New Project";

  return btn_new_project;
}

export {createDropdownForProjects, apendNewProject}