import { createContext, useContext, useReducer } from "react";
import { useState } from "react";
const CartContext = createContext({});

const CartProvider = ({ children, value }) => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  function cartHandler(cart, action) {
    switch (action.type) {
      case "add_to_cart":
        setShowSuccessAlert(true);
        return {
          ...cart,
          items: cart.items.concat(action.payload),
          total: cart.total + action.payload.price,
        };
      case "remove_from_cart":
        return {
          ...cart,
          items: cart.items.filter((item) => item._id !== action.payload.id),
          total: cart.total - action.payload.price,
        };
      default:
        return cart;
    }
  }
  const [cart, cartDispatch] = useReducer(cartHandler, {
    items: [],
    total: 0,
  });
  return (
    <CartContext.Provider
      value={{ cart, cartDispatch, showSuccessAlert, setShowSuccessAlert }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
