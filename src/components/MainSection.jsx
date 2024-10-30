import { useState } from "react";
import NoProjectSelected from "./NoProjectSelected";
import Project from "./Project";

export default function MainSection() {
  const [projectSelected, setProjectSelected] = useState(false);

  function handleClick() {
    setProjectSelected(true);
  }

  return (
    <>
      {projectSelected ? (
        <Project />
      ) : (
        <NoProjectSelected handleClick={handleClick} />
      )}
    </>
  );
}
