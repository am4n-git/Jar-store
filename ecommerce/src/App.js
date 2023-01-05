import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import * as Mui from "@material-ui/core";

function App() {
  const [products, setProducts] = useState([]);
  const baseUrl = "https://jar-store-server.vercel.app/products";
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
        <div key={item._id} className="cardContainer">
          <Mui.Card className="card">
            <Mui.CardMedia
              component="img"
              height="20"
              width="20"
              image="https://picsum.photos/20"
              alt="product image alt"
            />
            <Mui.CardContent>
              <Mui.Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Mui.Typography>
              <Mui.Typography variant="body2">{item.price}</Mui.Typography>
            </Mui.CardContent>
            <Mui.CardActions>
              <Mui.Button size="small" color="primary">
                Add To Cart
              </Mui.Button>
            </Mui.CardActions>
          </Mui.Card>
        </div>
      ))}
    </div>
  );
}

export default App;
