import Products from './Products';

export default function Shop({ DUMMY_PRODUCTS, onAddToCart }) {
  return (
    <section className="mt- 24 sm:mt-12">
      <p className="uppercase text-left text-customShopHeading font-extrabold text-2xl">
        Elegant Clothing for everyone
      </p>
      <ul className="grid md:grid-cols-2 grid-cols-1 gap-8 justify-items-center mt-8">
        {DUMMY_PRODUCTS.map(product => (
          <Products onAddToCart={onAddToCart} key={product.id} {...product} />
        ))}
      </ul>
    </section>
  );
}
