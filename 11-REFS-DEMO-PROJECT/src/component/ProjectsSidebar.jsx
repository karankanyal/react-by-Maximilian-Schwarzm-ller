export default function ProjectSidebar({ onStartAddProject, projects }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl  ">
      <h1 className="mb-8 uppercase font-bold md:text-xl text-stone-200">
        Your Projects
      </h1>
      <div>
        <button
          onClick={onStartAddProject}
          className="px-4 py-2 text-xs md:text  -base rounded-md text-stone-400 bg-stone-700 hover:text-stone-100 hover:bg-stone-600  "
        >
          + Add Project
        </button>
        <ul className="mt-8">
          {projects.map((project) => (
            <li key={project.id}>
              <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">
                {project.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}