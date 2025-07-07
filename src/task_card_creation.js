import { createNewTaskForm } from "./new_task_form";

function createCardsForTasks(project, switching=false){

  let task_card_container, task_list_div;

  task_card_container = document.createElement("div");
  task_card_container.setAttribute('class', 'task-card-container')
  
  task_list_div = getTaskListDiv(project)
  task_card_container.appendChild(task_list_div);
  
  if(!switching){
    task_list_div.appendChild( createBlankTask() ); 
    document.querySelector("body").appendChild( createNewTaskForm() );
  }

  return task_card_container;  
}

function getTaskListDiv(project) {
  
  let task_list_div, task_list;

  task_list_div = document.createElement("div");
  task_list_div.setAttribute('class', "task-list");
  task_list = project.getTasks();

  for(let i = 0; i < project.numberOfTasks(); i++){
    let task = task_list[i];
        task_list_div.appendChild(createTaskCard(task));
  }

  return task_list_div;
}

function appendNewTask(project){

  let task_list_div, task_list, new_task, new_task_card, new_task_btn;
  
  task_list_div = document.querySelector(".task-list");
  if(!task_list_div){
    throw Error("Missing Existing Task List To Append New Task To")
  }
  
  new_task_btn  = document.querySelector("#btn-new-task")
  task_list = project.getTasks();
  new_task = task_list[(task_list.length)-1];
  new_task_card = createTaskCard(new_task);
  task_list_div.removeChild(new_task_btn);
  task_list_div.appendChild(new_task_card);
  task_list_div.appendChild(new_task_btn);
}

function createTaskCard(task){

  let task_card, task_details, task_title, task_title_txt, 
  task_description, task_due_date, date_object, prio_el, prio;

  prio = task.priority();

  task_card = document.createElement("div");
  task_card.setAttribute('class',"task-card");
  task_card.classList.add(`${prio}-prio-task`)

  task_details = document.createElement('div');
  task_details.setAttribute("class", "task-details");
  
  task_title = document.createElement("div");
  task_title.setAttribute('class', "task-title");
  task_title_txt = document.createElement("h3");
  task_title_txt.innerHTML = task.title()
  
  task_description = document.createElement("div");
  task_description.setAttribute('class', "task-body");
  task_description.innerHTML = task.description(); 
  
  date_object = task.dueDate();
  task_due_date = document.createElement("div");
  task_due_date.setAttribute("class","date");
  task_due_date.innerHTML = date_object.dd + "/" + date_object.mm + "/" +date_object.yy
  
  prio_el = document.createElement('div');
  prio_el.setAttribute('class',"prio");
  prio_el.classList.add(prio);
  prio_el.innerHTML = prio;

  task_title.appendChild(task_title_txt);
  task_details.appendChild(task_title);
  task_details.appendChild(task_due_date);
  task_details.appendChild(task_description);

  task_card.appendChild(prio_el);
  task_card.appendChild(task_details)

  return task_card;
}

function createBlankTask () {

  let content_div = document.createElement("button");
  content_div.classList.add("new-task");
  content_div.setAttribute('id', "btn-new-task");
  content_div.innerHTML = "Add a new task";

  return content_div;
}

export {createCardsForTasks, appendNewTask, getTaskListDiv}