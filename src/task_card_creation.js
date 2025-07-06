import { createNewTaskForm } from "./new_task_form";

function createCardsForTasks(project, switching=false){

  let task_card_container, task_list_div, task_list;

  task_card_container = document.createElement("div");
  task_card_container.setAttribute('class', 'task-card-container')
  task_list_div = document.createElement("div");
  task_list_div.setAttribute('class', "task-list");
  task_list = project.getTasks();
  
  for(let i = 0; i < project.numberOfTasks(); i++){
    let task = task_list[i];
        task_list_div.appendChild(createTaskCard(task));
  }

  task_card_container.appendChild(task_list_div);
  
  if(!switching){
    task_card_container.appendChild( createBlankTask() ); 
    document.querySelector("body").appendChild( createNewTaskForm() );
  }

  return task_card_container;  
}

function appendNewTask(project){

  let task_list_div, task_list, new_task, new_task_card;
  
  task_list_div = document.querySelector(".task-list");
  if(!task_list_div){
    throw Error("Missing Existing Task List To Append New Task To")
  }
  
  task_list = project.getTasks();
  new_task = task_list[(task_list.length)-1];
  new_task_card = createTaskCard(new_task);
  task_list_div.appendChild(new_task_card);
}

function createTaskCard(task){

  let task_card, task_title, task_title_txt, task_description;

  task_card = document.createElement("div");
  task_card.setAttribute('class',"task-card");
  task_title = document.createElement("div");
  task_title.setAttribute('class', "task-title");
  task_title_txt = document.createElement("h3");
  task_title_txt.innerHTML = task.title()
  task_description = document.createElement("div");
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

  return content_div;
}

export {createCardsForTasks, appendNewTask}