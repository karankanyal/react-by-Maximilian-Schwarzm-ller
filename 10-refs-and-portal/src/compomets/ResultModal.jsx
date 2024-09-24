import { useRef } from 'react';

export default function ResultModal({ result, targetTime }) {
  const dialogRef = useRef();

  const handleClose = () => {
    dialogRef.current.close();
  };

  return (
    <dialog
      ref={dialogRef}
      className="w-3/5 md:w-2/5 lg:w-1/3 fixed bg-cyan-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md flex flex-col justify-center items-start pb-14 px-5"
      open
    >
      <h1 className="font-headingFontFamily font-bold text-4xl uppercase mt-10">
        You {result}
      </h1>
      <p className="my-1 text-lg font-extralight">
        The target time was{' '}
        <strong className="text-welcomeNameColor font-extrabold ">
          {targetTime} second{targetTime != 1 ? 's' : ''}.
        </strong>
      </p>
      <p className="my-1 text-lg text-stone-900 font-extralight">
        You stopped the timer with{' '}
        <strong className="text-welcomeNameColor font-extrabold ">
          X seconds left.
        </strong>
      </p>
      <form method="dialog">
        <button
          onClick={handleClose}
          className="absolute right-6 bottom-4 border-none bg-startGameBG text-white px-4 py-1 rounded-md hover:text-neutral-300"
        >
          Close
        </button>
      </form>
    </dialog>
  );
}
