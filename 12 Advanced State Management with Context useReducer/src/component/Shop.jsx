import Products from './Products.jsx';
import { useContext } from 'react';
import { CartContext } from '../store/shopping-cart-context.jsx';

export default function Shop({}) {
  const { DUMMY_PRODUCTS } = useContext(CartContext);

  return (
    <section className="mt- 24 sm:mt-12">
      <p className="uppercase text-left text-customShopHeading font-extrabold text-2xl">
        Elegant Clothing for everyone
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 justify-items-center mt-8">
        {DUMMY_PRODUCTS.map(product => (
          <Products key={product.id} {...product} />
        ))}
      </ul>
    </section>
  );
}
