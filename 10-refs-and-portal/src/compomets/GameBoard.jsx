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

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    setTimerStarted(true);
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      setTimerStarted(false);
      dialogRef.current.open();
    }, 1000 * targetTime);
  }

  function handleStop() {
    clearTimeout(timer.current);
    setTimerExpired(false);
    setTimerStarted(false);
  }

  return (
    <>
      <ResultModal ref={dialogRef} targetTime={targetTime} result="lost" />
      <section className="bg-gamepadBG w-full flex flex-col justify-center items-center rounded-lg py-2">
        <h1 className="my-4 uppercase text-xl font-bold">{difficultyLevel}</h1>
        <p className="border border-teal-400 rounded-md px-2 py-1">
          {targetTime} Second{targetTime != 1 ? "'s" : ''}
        </p>
        <button
          onClick={timerStarted ? handleStop : handleStart}
          className="bg-startGameBG px-4 py-2 text-white rounded-md my-8"
        >
          Start Challange
        </button>
        <p className="pb-4 font-extralight text-teal-900">
          {timerStarted ? 'Time is running...' : timerStatus}
        </p>
      </section>
      <dialog className="border border-red-500">
        <h2>You </h2>
        <p>
          The target time was <strong> seconds.</strong>
        </p>
        <p>
          You stopped the timer with <strong>X seconds left.</strong>
        </p>
        <form method="dialog">
          <button>Close</button>
        </form>
      </dialog>
    </>
  );
}
