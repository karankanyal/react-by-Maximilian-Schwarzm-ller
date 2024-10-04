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
      className=" modal min-w-[30rem] z-[2] bg-[#d5c7bc] rounded-lg animate-slide-up-fade-in"
      ref={dialog}
    >
      {children}
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
