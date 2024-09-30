import { forwardRef, useImperativeHandle, useRef } from 'react';
import Cart from './Cart';
import { createPortal } from 'react-dom';

const CartModal = forwardRef(function CartModal(
  { title, cartItems, onUpdateCartItemQuantity, action },
  ref
) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      className="dialogBox w-3/5 md:w-2/5 lg:w-1/3 px-5 py-5 fixed bg-orange-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md "
      ref={dialog}
    >
      <h2 className=" uppercase text-3xl text-yellow-900 font-extrabold">
        {title}
      </h2>
      <Cart items={cartItems} onUpdateItemQuantity={onUpdateCartItemQuantity} />
      <form method="dialog" className="text-right mt-4">
        {action}
      </form>
    </dialog>,
    document.querySelector('#modal')
  );
});

export default CartModal;
