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

// Context
import { useDarkMode } from "./Context/theme-context";
import { useProducts } from "./Context/product-data-context";

// MUI Theme
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Paper } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function App() {
  const { darkMode } = useDarkMode();
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });
  const { loading } = useProducts();
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper elevation={3}>
        <div className="App">
          {loading ? (
            <Backdrop
              open={true}
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          ) : (
            ""
          )}
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/account"
              element={
                <RequiresAuth>
                  <Account />
                </RequiresAuth>
              }
            />
            <Route
              path="/product/:name/:productId"
              element={<ProductDetail />}
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
      </Paper>
    </ThemeProvider>
  );
}

export default App;
