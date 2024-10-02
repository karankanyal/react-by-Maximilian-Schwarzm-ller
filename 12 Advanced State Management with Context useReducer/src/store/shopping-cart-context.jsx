import { createContext, useReducer } from 'react';
import { DUMMY_PRODUCTS } from '../dummy-products';

export const CartContext = createContext({
  items: [],
  DUMMY_PRODUCTS: [],
  addItemToCart: () => {},
  handleItemQuantity: () => {},
});

function shoppingCartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    const updatedItems = [...state.items];
    const existingCartItemIndex = updatedItems.findIndex(
      cartItem => cartItem.id === action.payload
    );
    const existingCartItem = updatedItems[existingCartItemIndex];
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = DUMMY_PRODUCTS.find(
        product => product.id === action.payload
      );
      updatedItems.push({
        id: action.payload,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }
    return {
      items: updatedItems,
    };
  }

  if (action.type === 'UPDATE_ITEM') {
    const updatedItems = [...state.items];
    const existingCartItemIndex = updatedItems.findIndex(
      cartItem => cartItem.id === action.payload.id
    );
    const existingCartItem = { ...updatedItems[existingCartItemIndex] };

    existingCartItem.quantity += action.payload.quantityToBeChanged;

    if (existingCartItem.quantity <= 0) {
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      updatedItems[existingCartItemIndex] = existingCartItem;
    }
    return {
      items: updatedItems,
    };
  }

  return state;
}

export default function CartContextProvider({ children }) {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    { items: [] } // This is state present to shoppingCartReducer
  );

  function handleShopingCart(id) {
    shoppingCartDispatch({
      //This object here is the action present in shoppingCartReducer
      type: 'ADD_ITEM',
      payload: id,
    });
  }

  function handleUpdateCartItemQuantity(id, quantityToBeChanged) {
    shoppingCartDispatch({
      type: 'UPDATE_ITEM',
      payload: {
        id,
        quantityToBeChanged,
      },
    });
  }

  const ctxValue = {
    items: shoppingCartState.items,
    DUMMY_PRODUCTS: DUMMY_PRODUCTS,
    addItemToCart: handleShopingCart,
    handleItemQuantity: handleUpdateCartItemQuantity,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
