import { createNewTaskForm } from "./new_task_form";

function createCardsForTasks(project){
  let task_list_div = document.createElement("div");
  task_list_div.setAttribute('class', "task-list");
  let task_list = project.getTasks();

  for(let i = 0; i < project.numberOfTasks(); i++){
    let task = task_list[i];
        task_list_div.appendChild(createTaskCard(task));
  }

  task_list_div.appendChild( createBlankTask() ); 

  return task_list_div;  
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

  content_div.appendChild(createNewTaskForm());

  return content_div;
}

export {createCardsForTasks}