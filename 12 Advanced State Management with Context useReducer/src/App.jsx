import { useState } from 'react';
import './App.css';
import { DUMMY_PRODUCTS } from './dummy-products';
import Header from './component/Header';
import Shop from './component/Shop';

function App() {
  const [shoppingCart, setShoppingCart] = useState({ items: [] });

  function handleShopingCart(id) {
    setShoppingCart(prevShoppingCart => {
      const updatedItems = [...prevShoppingCart.items];
      const existingCartItemIndex = updatedItems.findIndex(
        cartItem => cartItem.id === id
      );
      const existingCartItem = updatedItems[existingCartItemIndex];
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find(product => product.id === id);
        updatedItems.push({
          id: id,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }
      return {
        items: updatedItems,
      };
    });
  }

  function handleUpdateCartItemQuantity(id, quantityToBeChanged) {
    console.log(quantityToBeChanged);
    setShoppingCart(prevShoppingCart => {
      const updatedItems = [...prevShoppingCart.items];
      const existingCartItemIndex = updatedItems.findIndex(
        cartItem => cartItem.id === id
      );
      const existingCartItem = { ...updatedItems[existingCartItemIndex] };

      existingCartItem.quantity += quantityToBeChanged;

      if (existingCartItem.quantity <= 0) {
        updatedItems.splice(existingCartItemIndex, 1);
      } else {
        updatedItems[existingCartItemIndex] = existingCartItem;
      }
      return {
        items: updatedItems,
      };
    });
  }

  return (
    <>
      <Header
        cart={shoppingCart}
        onAddToCart={handleShopingCart}
        onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
      />
      <Shop DUMMY_PRODUCTS={DUMMY_PRODUCTS} onAddToCart={handleShopingCart} />
    </>
  );
}

export default App;
