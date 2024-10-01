import { useContext } from 'react';
import { CartContext } from '../store/shopping-cart-context';

export default function Products({ id, description, image, price, title }) {
  const { addItemToCart } = useContext(CartContext);

  return (
    <li
      key={id}
      className="bg-productbg rounded-xl flex flex-col justify-between "
    >
      <img className="rounded-xl" src={image} alt={title} />
      <div className="flex-1 mx-2 mt-4 text-start">
        <h1 className="text-productTitleColor text-xl">{title}</h1>
        <p className="text-productPriceColor text-base">${price}</p>
        <p className="text-lg pt-4 text-orange-100">{description}</p>
      </div>
      <p className="text-right mt-4 p-4">
        <button
          onClick={() => addItemToCart(id)}
          className="bg-addToCartbg rounded-lg px-4 py-2"
        >
          Add to Cart
        </button>
      </p>
    </li>
  );
}
