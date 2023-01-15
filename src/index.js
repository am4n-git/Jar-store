import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartProvider, SubTotalProvider } from "./Context/cart-context";
import { DarkThemeProvider } from "./Context/theme-context";
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <DarkThemeProvider>
      <CartProvider>
        <SubTotalProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SubTotalProvider>
      </CartProvider>
    </DarkThemeProvider>
  </StrictMode>
);
