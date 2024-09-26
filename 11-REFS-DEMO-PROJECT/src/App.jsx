import NewProject from "./component/NewProject";
import ProjectSidebar from "./component/ProjectsSidebar";
import NoProjectSelected from "./component/NoProjectSelected";
import Modal from "./component/Modal";
import { useState } from "react";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleCancelAddNewProject() {
    setProjectState((prevProject) => {
      return {
        ...prevProject,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevProject) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevProject,
        projects: [...prevProject.projects, newProject],
        selectedProjectId: undefined,
      };
    });
  }

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  let content;
  if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else if (projectState.selectedProjectId === null) {
    content = (
      <NewProject
        onCancel={handleCancelAddNewProject}
        onAdd={handleAddProject}
      />
    );
  }

  return (
    <>
      <Modal />
      <main className="h-screen my-8 flex gap-8">
        <ProjectSidebar
          projects={projectState.projects}
          onStartAddProject={handleStartAddProject}
        />
        {content}
      </main>
    </>
  );
}

export default App;
