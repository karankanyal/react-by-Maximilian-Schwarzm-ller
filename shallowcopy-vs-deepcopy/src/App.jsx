import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [state, setState] = useState({
    user: { name: "John", age: 30 },
    tasks: ["task1", "task2"],
  });

  const updateUser = () => {
    const newState = { ...state }; // shallow copy of state
    newState.user.name = "Doe";
    setState(newState); // triggers re-render
    console.log(state);
    console.log(newState);
  };        

  return (
    <div>
      <p>{state.user.name}</p>
      <button onClick={updateUser}>Change Name</button>
    </div>
  );
}

export default App;
