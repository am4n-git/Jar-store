import React, { useEffect, useState } from "react";
import axios from "axios";
// Material UI
import * as Mui from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
// Context Import
import { useCart } from "../Context/cart-context";
import { useDarkMode } from "../Context/theme-context";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  // Server url
  const baseUrl = process.env.REACT_APP_SERVER_URL;
  // Context functions
  const { addToCart } = useCart();
  const { removeFromCart } = useCart();

  // fetch all products intially
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
            <Mui.Card sx={{ maxWidth: 345 }} className="card">
              <Mui.CardActionArea>
                <Mui.CardMedia
                  component="img"
                  height="194"
                  image={item.image}
                  alt={item.name}
                  style={{ objectFit: "contain" }}
                />
                <Mui.CardContent>
                  {/* <Mui.Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Mui.Typography>
                  <Mui.Typography gutterBottom variant="h6" component="div">
                    {item.price}
                  </Mui.Typography> */}
                  <Mui.Typography variant="body2">
                    Some product description will come here and lets see how it
                    is added in tihs spacoiajc kasdj askjd iqod sjdn jkasf kjafs
                  </Mui.Typography>
                </Mui.CardContent>
              </Mui.CardActionArea>
              <Mui.CardActions>
                <Mui.Button
                  variant="contained"
                  startIcon={<AddShoppingCartIcon />}
                  onClick={addToCart}
                >
                  Add
                </Mui.Button>
                <Mui.Button
                  variant="outlined"
                  endIcon={<DeleteIcon />}
                  onClick={removeFromCart}
                >
                  Remove
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
