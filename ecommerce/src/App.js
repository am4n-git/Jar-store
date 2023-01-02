import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  const [products, setProducts] = useState([]);
  const baseUrl = "http://localhost:8000/product";
  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setProducts(response.data.products);
    });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <h1 className="text-3xl">Ecommerce</h1>{" "}
      {products.map((item) => (
        <li key={item._id}>
          {item.name}- ₹{item.price}
        </li>
      ))}
    </div>
  );
}

export default App;
