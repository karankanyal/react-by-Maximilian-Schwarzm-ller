import NewProject from './component/NewProject';
import ProjectSidebar from './component/ProjectsSidebar';
import NoProjectSelected from './component/NoProjectSelected';
import Modal from './component/Modal';
import { useState } from 'react';
import SelectedProject from './component/SelectedProject';

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(taskText) {
    setProjectState(prevProject => {
      const taskId = Math.random();
      const newTask = {
        text: taskText,
        id: taskId,
        projectId: prevProject.selectedProjectId,
      };

      return {
        ...prevProject,
        tasks: [newTask, ...prevProject.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(task => task.id !== id),
      };
    });
  }

  function handlerRemoveProject() {
    setProjectState(prevProject => {
      const newProjects = prevProject.projects.filter(
        project => project.id !== projectState.selectedProjectId
      );

      return {
        ...prevProject,
        projects: newProjects,
        selectedProjectId: undefined,
      };
    });
  }

  function handleSelectProject(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleCancelAddNewProject() {
    setProjectState(prevProject => {
      return {
        ...prevProject,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState(prevProject => {
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
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  const selectedProject = projectState.projects.find(
    project => project.id === projectState.selectedProjectId
  );

  let content = (
    <SelectedProject
      onAdd={handleAddTask}
      onDelete={handleDeleteTask}
      onSelectDelete={handlerRemoveProject}
      currentProject={selectedProject}
      tasks={projectState.tasks}
    />
  );

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
      <main className="h-screen my-8 flex gap-8">
        <ProjectSidebar
          selectedProjectId={projectState.selectedProjectId}
          projects={projectState.projects}
          onStartAddProject={handleStartAddProject}
          onSelectProject={handleSelectProject}
        />
        {content}
      </main>
    </>
  );
}

export default App;
