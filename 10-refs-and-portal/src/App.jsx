import './App.css';
import Header from './compomets/Header';
import Player from './compomets/Player';
import GameBoard from './compomets/GameBoard';

function App() {
  return (
    <div className="my-10 rounded-md px-[10vw] py-12 md:w-4/5 sm:w-full bg-mainContainerBG flex flex-col items-center">
      <Header />
      <Player />
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-20 w-4/5 justify-items-center">
        <GameBoard
          difficultyLevel="Easy"
          targetTime="1"
          timerStatus="Timer Inactive "
        />
        <GameBoard
          difficultyLevel="Not Easy"
          targetTime="5"
          timerStatus="Timer Inactive "
        />
        <GameBoard
          difficultyLevel="Getting tough"
          targetTime="10"
          timerStatus="Timer Inactive "
        />
        <GameBoard
          difficultyLevel="Pros Only"
          targetTime="15"
          timerStatus="Timer Inactive "
        />
      </div>
    </div>
  );
}

export default App;
