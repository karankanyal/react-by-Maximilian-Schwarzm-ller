import { useRef, useState } from 'react';

export default function NewTasks({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState('');

  const newTask = useRef();

  function handleChange(e) {
    setEnteredTask(e.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() !== '') onAdd(enteredTask);
    setEnteredTask('');
    newTask.current.value = '';
  }

  return (
    <div className="flex items-center gap-4">
      <input
        ref={newTask}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        type="text"
        value={enteredTask}
        onChange={handleChange}
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
}
