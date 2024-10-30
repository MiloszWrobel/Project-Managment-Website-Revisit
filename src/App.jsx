import Sidebar from "./components/Sidebar";
import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import Project from "./components/Project";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: false,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: !prevState.selectedProjectId,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        selectedProjectId: false,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  let content;

  if (projectsState.selectedProjectId === true) {
    content = (
      <Project handleClick={handleStartAddProject} onAdd={handleAddProject} />
    );
  } else if (projectsState.selectedProjectId === false) {
    content = <NoProjectSelected handleClick={handleStartAddProject} />;
  }

  return (
    <main className="flex h-screen gap-8">
      <Sidebar
        handleClick={handleStartAddProject}
        projects={projectsState.projects}
      />
      {content}
    </main>
  );
}

export default App;
