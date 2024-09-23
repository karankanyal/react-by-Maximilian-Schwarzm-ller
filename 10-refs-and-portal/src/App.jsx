import './App.css';
import Header from './compomets/Header';
import Player from './compomets/Player';
import GameBoard from './compomets/GameBoard';

function App() {
  return (
    <div className="my-10 rounded-md px-[10vw] py-12 md:w-4/5 sm:w-full bg-mainContainerBG flex flex-col items-center">
      <Header />
      <Player />
      <GameBoard />
    </div>
  );
}

export default App;
