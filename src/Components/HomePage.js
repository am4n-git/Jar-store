import * as Mui from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const baseUrl = "https://jar-store-server.vercel.app/products";
  useEffect(() => {
    setLoading(true);
    axios
      .get(baseUrl)
      .then((response) => {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setErrorMsg(error.message);
        console.log("server error", error);
        setShowError(true);
      });
  }, []);
  return (
    <div className="home-container">
      {loading ? <div className="loader"></div> : ""}
      {showError ? (
        <h2>
          Something broke, try again later !! <br />
          {errorMsg}{" "}
        </h2>
      ) : (
        ""
      )}
      <div className={`main ${loading ? "blur" : ""}`}>
        <Mui.Typography color="secondary" variant="h3" gutterBottom>
          Products
        </Mui.Typography>
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
    </div>
  );
}

export default HomePage;
