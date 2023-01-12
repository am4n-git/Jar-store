import { createContext, useContext, useState } from "react";

const CartContext = createContext({ items: 4 });

const defaultContextValue = {
  items: 9,
  logger: () => {
    console.log("add to cart called");
  },
};

const CartProvider = ({ children, value }) => {
  const [items, setItems] = useState(0);
  return (
    <CartContext.Provider value={{ items, setItems }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
