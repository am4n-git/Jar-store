import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import * as Mui from "@material-ui/core";

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
        <div key={item._id}>
          <Mui.Card>
            <Mui.CardMedia
              component="img"
              height="10"
              image="https://picsum.photos/"
              alt="product image alt"
            />
            <Mui.CardContent>
              <Mui.Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Mui.Typography>
              <Mui.Typography variant="body2" color="text.secondary">
                {item.price}
              </Mui.Typography>
            </Mui.CardContent>
          </Mui.Card>
        </div>
      ))}
    </div>
  );
}

export default App;
