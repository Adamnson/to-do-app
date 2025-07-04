export {ToDoItem, captureTaskDetailsFromForm}

function ToDoItem(item_title, desc, due_date, prio){
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


function captureTaskDetailsFromForm(data_obj){
  console.log("function called, yippie!")
  console.log(data_obj.title)
  console.log(data_obj.desc)
  console.log(data_obj.date)
  console.log(data_obj.prio)
  return new ToDoItem(data_obj.title, data_obj.desc, data_obj.date, data_obj.prio)
}
