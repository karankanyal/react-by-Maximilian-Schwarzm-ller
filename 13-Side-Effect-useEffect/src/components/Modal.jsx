import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
      close: () => {
        dialog.current.close();
      },
    };
  });

  return createPortal(
    <dialog
      className="top-[40%] left-[40%] modal z-[2] bg-[#d5c7bc] rounded-lg animate-slide-up-fade-in"
      ref={dialog}
    >
      {children}
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
