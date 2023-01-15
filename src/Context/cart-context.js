import { createContext, useContext, useState, useReducer } from "react";

// Cart Counter
const defaultContextValue = {
  items: 0,
};
const CartContext = createContext(defaultContextValue);
const CartProvider = ({ children, value }) => {
  const [items, setItems] = useState(0);
  function addToCart() {
    setItems((items) => items + 1);
  }
  function removeFromCart() {
    if (items > 0) {
      setItems((items) => items - 1);
    }
  }
  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Subtotal
const SubTotalContext = createContext({});
const SubTotalProvider = ({ children, value }) => {
  function subTotalCalculate(state, action) {
    switch (action.type) {
      case "add_to_cart":
        return {
          ...state,
          items: state.items.concat(action.payload),
          total: state.total + action.payload.price,
        };
      case "remove_from_cart":
        return {
          ...state,
          items: state.items.concat(action.payload),
          total: state.total - action.payload.price,
        };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(subTotalCalculate, {
    items: [],
    total: 0,
  });
  return (
    <SubTotalContext.Provider value={{ state, dispatch }}>
      {children}
    </SubTotalContext.Provider>
  );
};

const useCart = () => useContext(CartContext);
const useSubTotal = () => useContext(SubTotalContext);
export { useCart, CartProvider };
export { useSubTotal, SubTotalProvider };
