import { useRef } from 'react';
import CartModal from './CartModal';

export default function HeaderHeader({ cart, onUpdateCartItemQuantity }) {
  let buttonAction = '';

  cart.items.length > 0
    ? (buttonAction = (
        <>
          <button className="px-5 py-1 border-none mx-5">Close</button>
          <button className="bg-amber-950 text-white px-5 py-1 rounded-md border-none">
            Checkout
          </button>
        </>
      ))
    : (buttonAction = (
        <button className="bg-amber-950 text-white px-5 py-1 rounded-md border-none">
          Close
        </button>
      ));

  const headerRef = useRef();
  function handleClickCartButton() {
    headerRef.current.open();
  }

  return (
    <>
      <CartModal
        cartItems={cart.items}
        onUpdateCartItemQuantity={onUpdateCartItemQuantity}
        title="Your Cart"
        ref={headerRef}
        action={buttonAction}
      />
      <header className="flex flex-row items-center justify-between flex-wrap">
        <div className="flex items-center">
          <img
            className="w-20 mr-4"
            src="./logo.png"
            alt="Elegant-context-logo"
          />
          <h1 className="text-headingColor uppercase text-center text-4xl font-extrabold">
            ELEGANT CONTEXT
          </h1>
        </div>
        <p
          onClick={handleClickCartButton}
          ref={headerRef}
          className="cursor-pointer bg-cartButtonbg hover:bg-amber-200 px-5 py-1 text-xl rounded-md mt-10 lg:mt-0 text-right border-none"
        >
          <button className="border-none focus:outline-none placeholder-indigo-950">
            Cart
          </button>
          ({cart.items.length})
        </p>
      </header>
    </>
  );
}
