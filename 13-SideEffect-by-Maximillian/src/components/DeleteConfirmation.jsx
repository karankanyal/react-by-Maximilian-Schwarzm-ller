import { useEffect } from "react";
import Progress from "./Progress";

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const TIMER = 5000;

  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm();
    }, 5000);

    return () => {
      console.log("cleaning up timer");
      clearTimeout(timer);
    };
  }, [onConfirm]);
  // When adding a function as a dependency to the useEffect hook there is a denger of creating an infinite loop, because functions are at the end are values(object).
  // for example:- when dependency gets updated/changed useEffect will be re-executed and which will call onConfirm method and this will endup creating an infinite loop.

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text ">
          No
        </button>
        <button onClick={onConfirm} className="button ">
          Yes
        </button>
        <Progress timer={TIMER} />
      </div>
    </div>
  );
}
