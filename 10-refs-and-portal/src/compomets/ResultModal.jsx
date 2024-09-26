import { createPortal } from 'react-dom';
import { forwardRef, useImperativeHandle, useRef } from 'react';

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, resetTime },
  ref
) {
  const dialog = useRef();
  const userLost = remainingTime <= 0;
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  // This ref is the one recieved from parent
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="dialogBox w-3/5 md:w-2/5 lg:w-1/3 fixed bg-cyan-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md pb-14 px-5 "
    >
      <h1 className="font-headingFontFamily font-bold text-4xl uppercase mt-10">
        {userLost ? 'You lost' : `You 'r Score: ${score}%`}
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
          {(remainingTime / 1000).toFixed(2)} seconds left.
        </strong>
      </p>
      <form
        method="dialog"
        onSubmit={resetTime}
        onKeyDown={e => {
          if (e.key === 'Escape') {
            resetTime();
          }
        }}
      >
        <button className="absolute right-6 bottom-4 border-none bg-startGameBG text-white px-4 py-1 rounded-md hover:text-neutral-300">
          Close
        </button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default ResultModal;
