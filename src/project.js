function Project(name){
  if(!new.target){
    throw Error("You must use 'new' to initialize a new project");
  }

  this.name = name;
  let list = [];
  
  function addTask(task){
    let flag = false;

    for(let i = 0; i < list.length; i++){
      if ( list[i].title() === task.title()){
        flag = true;
        break;
      } 
    }

    if(!flag){
      list.push(task)
    }
    else {
      throw Error(`The task with  title '${task.title()}' exists!` )
    }
  }

  function getTasks(){
    return list;
  }

  function getName(){
    return name;
  }

  function numberOfTasks(){
    return list.length;
  }

  return {getName, addTask, getTasks, numberOfTasks}
}

export {Project}
