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
  let aside = document.createElement("aside");
  aside.innerHTML = "Project Deets";
  aside.style.visibility = "hidden";
  console.log(aside);

  return aside;
}


export {showProjectDetails, projectStatAside}