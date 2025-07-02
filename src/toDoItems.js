export function ToDoItem(title, desc, dueDate, prio){
  if (!new.target) {
    throw Error("You must use the 'new' operator to initialize a new task!");
  }
  this.title = title;
  this.description = desc;
  this.dueDate = dueDate;
  this.prio = prio;
  
  function show (){
    console.log(title);
    console.log(desc);
    console.log(dueDate);
    console.log(prio);
  }
  
  return {show}
}

