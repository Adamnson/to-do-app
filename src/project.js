function Project(name){
  if(!new.target){
    throw Error("You must use 'new' to initialize a new project");
  }

  this.name = name;
  let list = [];
  
  function addTask(task){
    list.push(task)
  }

  function getTasks(){
    return list;
  }

  function getName(){
    return name;
  }

  return {getName, addTask, getTasks}
}

function createTaskListDOM(project){
  let heading = document.createElement("h2");
  heading.innerHTML = project.getName()
  return heading
}

export  {Project, createTaskListDOM}