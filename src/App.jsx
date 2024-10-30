import Sidebar from "./components/Sidebar";
import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import Project from "./components/Project";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: false,
    projects: [],
  });

  function handleAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: !prevState.selectedProjectId,
      };
    });
  }

  let content;

  if (projectsState.selectedProjectId === true) {
    content = <Project handleClick={handleAddProject} />;
  } else if (projectsState.selectedProjectId === false) {
    content = <NoProjectSelected handleClick={handleAddProject} />;
  }

  return (
    <main className="flex h-screen gap-8">
      <Sidebar handleClick={handleAddProject} />
      {content}
    </main>
  );
}

export default App;
