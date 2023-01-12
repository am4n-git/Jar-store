import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartContext } from "./Context/cart-context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CartContext.Provider
      value={{
        items: 6,
        logger: () => {
          console.log("cart context called");
        },
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartContext.Provider>
  </StrictMode>,
  rootElement
);
