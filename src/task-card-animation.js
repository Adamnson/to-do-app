let task_title_els =  Array.from(document.querySelectorAll(".task-title"));
let task_cards = Array.from(document.querySelectorAll(".task-card"))

function execute(){
  console.log(`${task_title_els.length} and ${task_cards.length}`)
}

export{execute}