import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
import SelectedProjects from "./components/SelectedProjects";
function App() {
  const [projectState,setProjectsState]=useState({
    selectedProject:undefined,
    projects:[],
    tasks:[],
  });
function handleAddTask(text){
  
    setProjectsState((prevState)=>{
      const taskId=Math.random();
      const newTask={
        text:text,
        projectId:prevState.selectedProject,
        id:taskId,
      }
      return {
        ...prevState,
        tasks:[newTask,...prevState.tasks],
      }
    })
}

function handleDeleteTask(id){
  setProjectsState((prevState)=>
    {
      return {
        ...prevState,
        tasks:prevState.tasks.filter((task)=>task.id!==id)
      }
    })
}

  function handleStartAddProject(){
    setProjectsState((prevState)=>
    {
      return {
        ...prevState,
        selectedProject:null,
      }
    })
  }
  function handleSelectProject(id)
  {
    setProjectsState((prevState)=>
      {
        return {
          ...prevState,
          selectedProject:id,
        }
      })
  }
  function handleondelete()
  {
    setProjectsState((prevState)=>
      {
        return {
          ...prevState,
          selectedProject:undefined,
          projects:prevState.projects.filter((project)=>project.id!==prevState.selectedProject)
        }
      })
  }
  function handleCancelAddProject()
  {
    setProjectsState((prevState)=>
      {
        return {
          ...prevState,
          selectedProject:undefined,
        }
      })
  }
  function handleAddProject(projectData)
  {
    
    setProjectsState((prevState)=>{
      const projectId=Math.random();
      const newProject={
        ...projectData,
        id:projectId,
      }
      return {
        ...prevState,
        selectedProject:undefined,
        projects:[...prevState.projects,newProject],
      }
    })
  }
  const selectedProject=projectState.projects.find(project=>project.id===projectState.selectedProject)
  let content=<SelectedProjects project={selectedProject} ondelete={handleondelete} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectState.tasks}/>;
  if(projectState.selectedProject===null) content=<NewProject onSave={handleAddProject} onCancel={handleCancelAddProject}/>
  else if(projectState.selectedProject===undefined) content=<NoProjectSelected OnStartAddProject={handleStartAddProject}/>
  // console.log(projectState);
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar OnStartAddProject={handleStartAddProject} projects={projectState.projects} onSelectProject={handleSelectProject} selectedProjectId={projectState.selectedProject}/>
      {content}
    </main>
  );
}

export default App;
