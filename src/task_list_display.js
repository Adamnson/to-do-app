import "./task_list.css"


function createTaskListDOM(project){
  let container = document.createElement("div")
  container.setAttribute('class', "container");
  let project_name = document.createElement("h2");
  project_name.innerHTML = project.getName();

  let task_list_div = document.createElement("div");
  task_list_div.setAttribute('class', "task-list");
  let task_list = project.getTasks();

  for(let i = 0; i < project.numberOfTasks(); i++){
    let task = task_list[i];
        task_list_div.appendChild(createTaskCard(task));
  }

  task_list_div.appendChild( createBlankTask() ); 

  container.appendChild(project_name);
  container.appendChild(task_list_div);

  return container
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
  let form = document.createElement('form');
  let title_div = document.createElement('div');
  let description_div = document.createElement('div');
  let date_div = document.createElement('div');
  let prio_div = document.createElement('div');

  let title_field = document.createElement("input");
  let title_label = document.createElement('label');
  title_field.type = "text"
  title_field.setAttribute('id', 'title');
  title_label.setAttribute("for", "title")
  title_label.innerHTML = "Task Title "
  title_div.appendChild(title_label);
  title_div.appendChild(title_field);

  let description_field = document.createElement("input");
  let description_label = document.createElement('label');
  description_field.type = "text"
  description_field.setAttribute('id', 'description');
  description_label.setAttribute("for", "description")
  description_label.innerHTML = "Task Description "
  description_div.appendChild(description_label);
  description_div.appendChild(description_field);

  let date_field = document.createElement("input");
  let date_label = document.createElement('label');
  date_field.type = "text"
  date_field.setAttribute('id', 'date');
  date_label.setAttribute("for", "date")
  date_label.innerHTML = "Due date "
  date_div.appendChild(date_label);
  date_div.appendChild(date_field);

  let prio_field = document.createElement("input");
  let prio_label = document.createElement('label');
  prio_field.type = "text"
  prio_field.setAttribute('id', 'priority');
  prio_label.setAttribute("for", "priority")
  prio_label.innerHTML = "Priority "
  prio_div.appendChild(prio_label);
  prio_div.appendChild(prio_field);

  let btn_sumbit = document.createElement("button");
  btn_sumbit.setAttribute('id', "task-submit");
  btn_sumbit.innerHTML = "Create Task"

  form.appendChild(title_div);
  form.appendChild(description_div);
  form.appendChild(date_div);
  form.appendChild(prio_div);
  form.appendChild(btn_sumbit);

  form_dialog.appendChild(form);

  return form_dialog;
}


export {createTaskListDOM}

