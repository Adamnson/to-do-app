export {Task, createTask}

function Task(item_title, desc, due_date, prio){
  if (!new.target) {
    throw Error("You must use the 'new' operator to initialize a new task!");
  }

  function title(){
    return item_title;
  }

  function description(){
    return desc;
  }

  function dueDate(){
    return due_date;
  }

  function priority(){
    return prio;
  }
  
  return {title, description, dueDate, priority}
}

function createTask(data_obj){
  return new Task(data_obj.title, data_obj.desc, data_obj.date, data_obj.prio)
}
