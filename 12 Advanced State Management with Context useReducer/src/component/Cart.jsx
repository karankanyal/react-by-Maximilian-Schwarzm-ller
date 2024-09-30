export default function Cart({ items, onUpdateItemQuantity }) {
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div>
      {items.length === 0 && <p>No items in cart!</p>}
      {items.length > 0 && (
        <ul>
          {items.map(item => {
            const formattedPrice = `$${item.price.toFixed(2)}`;
            return (
              <li
                className="border flex justify-between my-5 px-7 py-2 bg-orange-200 border-none rounded-lg"
                key={item.id}
              >
                <div>
                  <span className="flex flex-col">{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button
                    className="mx-2 w-4 rounded-sm focus:outline-none hover:bg-amber-500"
                    onClick={() => onUpdateItemQuantity(item.id, -1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="mx-2 w-4 rounded-sm focus:outline-none hover:bg-amber-500"
                    onClick={() => onUpdateItemQuantity(item.id, 1)}
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
