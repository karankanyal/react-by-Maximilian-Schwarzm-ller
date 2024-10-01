import { createContext } from 'react';

export const CartContext = createContext({
  items: [],
  DUMMY_PRODUCTS: [],
  onAddToCart: () => {},
  handleItemQuantity: () => {},
});
