export default function GameBoard({
  difficultyLevel,
  timerValue,
  timerStatus,
}) {
  return (
    <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-4 w-4/5 justify-items-center">
      <div className="bg-gamepadBG w-full flex flex-col justify-center items-center rounded-lg py-10">
        <h1 className="my-4 uppercase text-xl font-bold">
          {difficultyLevel}easy
        </h1>
        <p className="border border-teal-400 rounded-md px-2 py-1">
          {timerValue} timerValue
        </p>
        <button className="bg-startGameBG px-4 py-2 text-white rounded-md my-10">
          Start Challange
        </button>
        <p className="font-extralight text-teal-900">
          {timerStatus}TimerStatus
        </p>
      </div>
    </div>
  );
}
