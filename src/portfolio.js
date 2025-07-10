function Portfolio(name){
  if(!new.target){
    throw Error("You must use 'new' to initialize a new portfolio");
  }

  this.name = name;
  let list = [];
  let current;
  
  function addProject(project){
    let flag = false;

    for(let i = 0; i < list.length; i++){
      if ( list[i].getName() === project.getName()){
        flag = true;
        break;
      } 
    }

    if(!flag){
      list.push(project)
      if (list.length == 1){
        setCurrentProject(project);
      }
    }
    else {
      throw Error(`A Project with  name '${project.getName()}' exists!` )
    }
  }

  function getProjects(){
    return list;
  }

  function getPortfolioName(){
    return name;
  }

  function numberOfProjects(){
    return list.length;
  }

  function setCurrentProject(prj){
    current = prj
  }

  function getCurrentProject(){
    return current
  }

  function getProjectByName(name)
  {
    for(let i = 0; i < list.length; i++){
      if ( list[i].getName() === name){
        return list[i];
      } 
    }
    throw Error(`Project with name ${name} not found` );
  }

  return {getPortfolioName, numberOfProjects,
     addProject, getProjects, getProjectByName,
      setCurrentProject, getCurrentProject}
}

export {Portfolio}
