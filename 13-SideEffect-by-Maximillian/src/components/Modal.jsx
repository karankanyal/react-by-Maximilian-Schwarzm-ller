import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ open, children, onclose }) {
  const dialog = useRef();

  // here useEffect will executes right after the execution of the component function not before nor at the same time
  // effect dependencies in the end are simply prop or state values that are used inside useEffect function.
  // In other words:- Any value that causes component to be rerender present inside the useEffect() is a Effect dependency.

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onclose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
