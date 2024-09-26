import { useRef, useState } from 'react';
import ResultModal from './ResultModal';

// let timer;
// Using this we can start and stop the timer but this is a global variable means this can store only one value-
// -(only one GameBoard component's value), If we do start timer like 1sec and 5sec together timer will get the last one value wiz clicked.
// Hence this is not a good solution istead we can use Ref()

export default function GameBoard({
  difficultyLevel,
  targetTime,
  timerStatus,
}) {
  // We also can not use it here bcz when component re-executed again this timer also executed again and get's new value which will be null;
  // let timer;

  let timer = useRef();
  let dialogRef = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  // Lost the game
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialogRef.current.open();
  }

  function onReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining(prevTime => prevTime - 10);
    }, 10);
  }

  // Chance to Win the game
  function handleStop() {
    clearInterval(timer.current);
    dialogRef.current.open();
  }

  return (
    <>
      <ResultModal
        resetTime={onReset}
        ref={dialogRef}
        remainingTime={timeRemaining}
        targetTime={targetTime}
      />
      <section className="bg-gamepadBG w-full flex flex-col justify-center items-center rounded-lg py-2">
        <h1 className="my-4 uppercase text-xl font-bold">{difficultyLevel}</h1>
        <p className="border border-teal-400 rounded-md px-2 py-1">
          {targetTime} Second{targetTime != 1 ? "'s" : ''}
        </p>
        <button
          onClick={timerIsActive ? handleStop : handleStart}
          className="bg-startGameBG px-4 py-2 text-white rounded-md my-8"
        >
          {timerIsActive ? 'Stop' : 'Start'} Challange
        </button>
        <p
          className={`pb-4 font-extralight text-teal-900 ${
            timerIsActive ? 'animate-pulse' : ''
          }`}
        >
          {timerIsActive ? 'Time is running...' : timerStatus}
        </p>
      </section>
    </>
  );
}
