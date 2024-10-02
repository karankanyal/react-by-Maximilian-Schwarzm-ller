import './App.css';
import Header from './component/Header';
import Shop from './component/Shop';

import CartContextProvider from './store/shopping-cart-context';

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Shop></Shop>
    </CartContextProvider>
  );
}

export default App;
