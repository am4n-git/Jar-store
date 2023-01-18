import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthProvider from "./Context/auth-context";
import { CartProvider } from "./Context/cart-context";
import { ProductDataProvider } from "./Context/product-data-context";
import { DarkThemeProvider } from "./Context/theme-context";
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <DarkThemeProvider>
          <ProductDataProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </ProductDataProvider>
        </DarkThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
