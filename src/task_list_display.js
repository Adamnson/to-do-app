import "./task_list.css"


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


  let project = portfolio.getCurrentProject();
  let task_list_div = document.createElement("div");
  task_list_div.setAttribute('class', "task-list");
  let task_list = project.getTasks();

  for(let i = 0; i < project.numberOfTasks(); i++){
    let task = task_list[i];
        task_list_div.appendChild(createTaskCard(task));
  }

  task_list_div.appendChild( createBlankTask() ); 

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

function createTaskCard(task){

  let task_card = document.createElement("div");
  task_card.setAttribute('class',"task-card");
  let task_title = document.createElement("div");
  task_title.setAttribute('class', "task-title");
  let task_title_txt = document.createElement("h3");
  task_title_txt.innerHTML = task.title()
  let task_description = document.createElement("div");
  task_description.setAttribute('class', "task-body");
  task_description.innerHTML = task.description(); 
  
  task_title.appendChild(task_title_txt);
  task_card.appendChild(task_title);
  task_card.appendChild(task_description);

  return task_card;
}

function createBlankTask () {

  let content_div = document.createElement("button");
  content_div.classList.add("new-task");
  content_div.setAttribute('id', "btn-new-task");
  content_div.innerHTML = "Add a new task";

  content_div.appendChild(createInputForm());

  return content_div;
}


function createInputForm(){

  let form_dialog = document.createElement('dialog');
  form_dialog.setAttribute('id', "form-dialog");
  let form = document.createElement('form');
  form.setAttribute("method", "dialog");

  form.appendChild(createFormFields('title', "Task Title"));
  form.appendChild(createFormFields('description', "Task Description"));
  form.appendChild(createFormFields('date', "Due Date"));
  form.appendChild(createFormFields('priority', "Priority"));

  let btn_sumbit = document.createElement("button");
  btn_sumbit.setAttribute('id', "task-submit");
  btn_sumbit.innerHTML = "Create Task"
;
  form.appendChild(btn_sumbit);

  form_dialog.appendChild(form);

  return form_dialog;
}

function createFormFields(input, label){

  let form_field_div = document.createElement('div');
  let form_field = document.createElement("input");
  let form_label = document.createElement('label');
  form_field.type = "text"
  form_field.setAttribute('id', `${input}`);
  form_label.setAttribute("for", `${input}`)
  form_label.innerHTML = label
  form_field_div.appendChild(form_label);
  form_field_div.appendChild(form_field);

  return form_field_div;
}

export {createTaskListDOM}

