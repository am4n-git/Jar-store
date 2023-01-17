import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { useDarkMode } from "./Context/theme-context";
import ProductDetail from "./Components/ProductDetail";

function App() {
  const { darkMode } = useDarkMode();
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper style={{ height: "100%" }}>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product/:productId" element={<ProductDetail />} />

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
