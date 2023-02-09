import { Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import ProductDetail from "./Components/ProductDetail";
import Account from "./Components/Account";
import RequiresAuth from "./Components/RequiresAuth";
import Wishlist from "./Components/Wishlist";

// Context
import { useDarkMode } from "./Context/theme-context";

// MUI Theme
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Paper } from "@mui/material";
import SignUp from "./Components/SignUp";

function App() {
  const { darkMode } = useDarkMode();
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "light" : "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/account"
            element={
              <RequiresAuth>
                <Account />
              </RequiresAuth>
            }
          />
          <Route path="/product/:name/:productId" element={<ProductDetail />} />
          <Route
            path="/wishlist"
            element={
              <RequiresAuth>
                <Wishlist />
              </RequiresAuth>
            }
          />

          {/* If no route matches */}
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem", backgroundColor: "red" }}>
                <p>No Page Found!</p>
              </main>
            }
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
