import { useContext } from 'react';
import { CartContext } from '../store/shopping-cart-context';

export default function Cart({ onUpdateItemQuantity }) {
  // This will established a connection to the CartContext.
  const cartCtx = useContext(CartContext);
  const { handleItemQuantity } = useContext(CartContext);

  const totalPrice = cartCtx.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div>
      {cartCtx.items.length === 0 && <p>No items in cart!</p>}
      {cartCtx.items.length > 0 && (
        <ul>
          {cartCtx.items.map(item => {
            const formattedPrice = `$${item.price.toFixed(2)}`;
            return (
              <li
                className="border flex justify-between my-5 pl-7 py-2 bg-orange-200 border-none rounded-lg"
                key={item.id}
              >
                <div>
                  <span className="flex flex-col">{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions flex items-center flex-nowrap">
                  <button
                    className="mx-2 w-4 rounded-sm focus:outline-none hover:bg-amber-500"
                    onClick={() => handleItemQuantity(item.id, -1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="mx-2 w-4 rounded-sm focus:outline-none hover:bg-amber-500"
                    onClick={() => handleItemQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p className="text-right">
        Cart Total: <strong className="text-lg">{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
