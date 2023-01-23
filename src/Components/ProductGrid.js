import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/cart-context";

/* ----------------Material UI-------------- */
import * as Mui from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import MuiAlert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";

function ProductGrid(items) {
  const item = items.props;
  const { cart, dispatch, showSuccessAlert, setShowSuccessAlert } = useCart();

  // add to cart
  function addToCart(item) {
    return new Promise((resolve, reject) => {
      try {
        dispatch({ type: "add_to_cart", payload: item });
        setTimeout(() => {
          setShowSuccessAlert(false);
        }, 3000);
      } catch (error) {}
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
    <div className="cardContainer">
      {/* Add to Cart alert */}
      {showSuccessAlert && (
        <Stack sx={{ width: "20%" }} spacing={2}>
          <Snackbar open={showSuccessAlert} autoHideDuration={6000}>
            <MuiAlert elevation={3} severity="success" variant="filled">
              Added to Cart {}
            </MuiAlert>
          </Snackbar>
        </Stack>
      )}
      <div key={item._id}>
        <Mui.Card
          sx={{ maxWidth: 200, width: 300, height: 400 }}
          className="product-card"
        >
          <Link to={`/product/${item.name}/${item._id}`}>
            <Mui.CardActionArea>
              <Mui.CardMedia
                component="img"
                height="150"
                image={item.image}
                alt={item.name}
                style={{ objectFit: "fill" }}
              />
              <Mui.CardContent>
                <Mui.Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Mui.Typography>
                <Mui.Typography gutterBottom variant="h6" component="div">
                  ₹{item.price}
                </Mui.Typography>
                <Mui.Typography
                  style={{ height: 50, overflow: "auto" }}
                  variant="body2"
                >
                  {item.description}
                </Mui.Typography>
              </Mui.CardContent>
            </Mui.CardActionArea>
          </Link>

          <Mui.CardActions className="product-grid-btn">
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
    </div>
  );
}

export default ProductGrid;
