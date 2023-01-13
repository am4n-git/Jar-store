import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./Context/cart-context";
import { ThemeProvider } from "./Context/theme-context";
const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
