import React, { useEffect, useState } from "react";
import axios from "axios";
// Material UI
import * as Mui from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
// Context Import
import { useCart } from "../Context/cart-context";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  // Server url
  const baseUrl = process.env.REACT_APP_SERVER_URL;
  // Context functions
  const { cart, dispatch } = useCart();

  // remove from cart
  function removeProduct(id) {
    const item = cart.items.find((item) => item._id === id);
    if (!item) return;
    dispatch({
      type: "remove_from_cart",
      payload: {
        id: item._id,
        price: item.price,
      },
    });
  }

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
        {products.map((item, index) => (
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
                  <Mui.Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Mui.Typography>
                  <Mui.Typography gutterBottom variant="h6" component="div">
                    ₹{item.price}
                  </Mui.Typography>
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
                  onClick={() => {
                    dispatch({ type: "add_to_cart", payload: item });
                  }}
                >
                  Add
                </Mui.Button>
                <Mui.Button
                  variant="outlined"
                  endIcon={<DeleteIcon />}
                  onClick={() => {
                    removeProduct(item._id);
                  }}
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
