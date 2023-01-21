import React, { useState } from "react";
import { Link } from "react-router-dom";

/* ----------------Context Import----------- */
import { useCart } from "../Context/cart-context";
import { useProducts } from "../Context/product-data-context";
import Filter from "./Filter";

/* ----------------Material UI-------------- */
import * as Mui from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import MuiAlert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";

function HomePage() {
  // Context functions
  const { cart, dispatch } = useCart();
  const { products, showError, errorMsg } = useProducts();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  // add to cart
  function addToCart(item) {
    return new Promise((resolve, reject) => {
      try {
        dispatch({ type: "add_to_cart", payload: item });
        setShowSuccessAlert(true);
        setTimeout(() => {
          setShowSuccessAlert(false);
        }, 3000);
      } catch (error) {
        setShowErrorAlert(true);
        setTimeout(() => {
          setShowErrorAlert(false);
        }, 3000);
      }
    });
  }

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

  return (
    <div className="home-container">
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
      {showSuccessAlert || showErrorAlert ? (
        <Stack sx={{ width: "20%" }} spacing={2}>
          <Snackbar open={showSuccessAlert} autoHideDuration={6000}>
            <MuiAlert elevation={6} severity="success" variant="filled">
              Added to Cart {}
            </MuiAlert>
          </Snackbar>
          <Snackbar open={showErrorAlert} autoHideDuration={6000}>
            <MuiAlert elevation={6} severity="error" variant="filled">
              Something, went wrong !!
            </MuiAlert>
          </Snackbar>
        </Stack>
      ) : (
        ""
      )}
      <Filter />
      {products.map((item, index) => (
        <div key={item._id} className="cardContainer">
          <Mui.Card sx={{ maxWidth: 345 }} className="card">
            <Link to={`/product/${item.name}/${item._id}`}>
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
            </Link>

            <Mui.CardActions>
              <Mui.Button
                variant="contained"
                startIcon={<AddShoppingCartIcon />}
                onClick={() => addToCart(item)}
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
  );
}

export default HomePage;
