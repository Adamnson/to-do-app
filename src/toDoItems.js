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


function captureTaskDetailsFromForm(event){
  event.preventDefault();
  console.log("function called, yippie!")
  let title = document.getElementById("title").value
  let desc = document.getElementById("description").value
  let date = document.getElementById("date").value
  let prio = document.getElementById("priority").value

  console.log(title)
  console.log(desc)
  console.log(date)
  console.log(prio)
}
