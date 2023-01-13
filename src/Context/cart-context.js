import { createContext, useContext, useState } from "react";

const defaultContextValue = {
  items: 9,
  logger: () => {
    console.log("add to cart called");
  },
};
const CartContext = createContext({ items: 4 });

const CartProvider = ({ children, value }) => {
  const [items, setItems] = useState(0);
  function addToCart() {
    setItems((items) => items + 1);
  }
  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
