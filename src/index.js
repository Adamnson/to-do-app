function todoItem(title, desc, dueDate, prio){
  this.title = title;
  this.description = desc;
  this.dueDate = dueDate;
  this.prio = prio;

  function show(){
    console.log(title);
    console.log(description);
    console.log(dueDate);
    console.log(prio);
  }

  return {show}
}

item1 = todoItem("create To Do App", "To create an application to track tasks", "4-6-25", "usual");
item1.show();
