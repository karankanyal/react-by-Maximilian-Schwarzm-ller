import Tasks from '../Tasks';

export default function SelectedProject({
  currentProject,
  tasks,
  onSelectDelete,
  onAdd,
  onDelete,
}) {
  const formatedDate = new Date(currentProject.dueDate).toLocaleDateString(
    'en-US',
    {
      year: 'numeric',
      month: 'short',
      Date: 'numeric',
    }
  );

  return (
    <div className="w-[35rem] mt-36">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className=" flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {currentProject.title}
          </h1>
          <button
            onClick={onSelectDelete}
            className="text-stone-600 hover:text-stone-900"
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{currentProject.description}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{formatedDate}</p>
      </header>
      <Tasks
        currentProject={currentProject}
        tasks={tasks}
        onAdd={onAdd}
        onDelete={onDelete}
      />
    </div>
  );
}
