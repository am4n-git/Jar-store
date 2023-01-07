import * as Mui from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";

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
          <Mui.Link href="/" color="#ababab">
            <RefreshIcon />
          </Mui.Link>
        </h2>
      ) : (
        ""
      )}
      <div className={`${loading ? "blur" : ""}`}>
        {products.map((item) => (
          <div key={item._id} className="cardContainer">
            <Mui.Card sx={{ maxWidth: 500 }} className="card">
              <Mui.CardActionArea>
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
                  <Mui.Typography gutterBottom variant="h6" component="div">
                    {item.price}
                  </Mui.Typography>
                  <Mui.Typography variant="body2">
                    Some product description will come here
                  </Mui.Typography>
                </Mui.CardContent>
              </Mui.CardActionArea>
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
