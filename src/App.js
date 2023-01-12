import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import Cart from "./Components/Cart";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />


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
  );
}

export default App;
