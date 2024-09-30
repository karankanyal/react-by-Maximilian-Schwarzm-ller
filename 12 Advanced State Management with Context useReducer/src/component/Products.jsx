export default function Products({
  onAddToCart,
  id,
  description,
  image,
  price,
  title,
}) {
  return (
    <li
      key={id}
      className="bg-productbg rounded-xl flex flex-col justify-between "
    >
      <img className="rounded-xl " src={image} alt={title} />
      <div className="flex-1 mx-2 mt-4 text-start">
        <h1 className="text-productTitleColor text-2xl">{title}</h1>
        <p className="text-productPriceColor text-base">${price}</p>
        <p className="text-xl pt-4 text-orange-100">{description}</p>
      </div>
      <p className="text-right mt-4 p-4">
        <button
          onClick={() => onAddToCart(id)}
          className="bg-addToCartbg rounded-lg px-4 py-2"
        >
          Add to Cart
        </button>
      </p>
    </li>
  );
}
