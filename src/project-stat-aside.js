function showProjectDetails(n) {
   if (n==-1 ) {
    let aside = document.querySelector("aside");
    aside.style.visibility = "hidden";
  }
  else if (n==1){
    let aside = document.querySelector("aside");
    aside.style.visibility = "visible";
  }  
}
function projectStatAside(){

  let aside, sub_div_prefixes;

  aside = document.createElement("aside");
  sub_div_prefixes =["total", "low", "medium", "high"]

  sub_div_prefixes.forEach((pre)=>{
    let count_div = document.createElement("div");
    count_div.setAttribute("id",`${pre}-count`);
    count_div.innerHTML = "";
    aside.appendChild(count_div)
  })

  aside.style.visibility = "hidden";
  console.log(aside);

  return aside;
}

function updateTaskCountInAside(project){

  (document.querySelector("#total-count")).innerHTML = `Total number of Tasks: ${project.numberOfTasks()}`;
   let prio_list = ["high", "medium", "low"];
    for(let i =0; i < prio_list.length; i++)
    {
      let prio_task_count, target_div;
      
      prio_task_count = Array.from(document.querySelectorAll(`.${prio_list[i]}-prio-task`)).length;
      target_div = document.querySelector(`#${prio_list[i]}-count`);
      
      if (prio_task_count ){
        target_div.innerHTML = `\n${(prio_list[i]).capitalize()}: ${prio_task_count}`
      }
      else{
        target_div.innerHTML = "";
      }
    }
}

export {showProjectDetails, projectStatAside, updateTaskCountInAside}