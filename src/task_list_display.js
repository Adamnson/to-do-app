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

export {createTaskListDOM}