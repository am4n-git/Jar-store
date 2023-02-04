import * as Mui from "@mui/material";

import React from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../Context/product-data-context";
import { useCart } from "../Context/cart-context";

function ProductDetail() {
  const { productId } = useParams();
  const { products } = useProducts();
  const product = products.find((item) => item._id === productId);
  const { cart, cartDispatch, setShowSuccessAlert } = useCart();

  // add to cart
  function addToCart(item) {
    return new Promise((resolve, reject) => {
      try {
        cartDispatch({ type: "add_to_cart", payload: item });
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
    cartDispatch({
      type: "remove_from_cart",
      payload: {
        id: item._id,
        price: item.price,
      },
    });
  }
  return (
    <Mui.Container
      className="product-detail-container"
      sx={{ height: "100vh", marginTop: 5, marginLeft: 0 }}
    >
      <Mui.CardMedia
        component="img"
        height="350"
        image={product.image}
        alt={product.name}
        style={{ objectFit: "contain" }}
      />
      <Mui.Typography>{product.name}</Mui.Typography>
      <Mui.Typography>{product.price}</Mui.Typography>
      <Mui.CardActions className="product-grid-btn">
        <Mui.Button variant="contained" onClick={() => addToCart(product)}>
          Add
        </Mui.Button>
        <Mui.Button
          variant="outlined"
          onClick={() => {
            removeProduct(product._id);
          }}
        >
          Remove
        </Mui.Button>
      </Mui.CardActions>
    </Mui.Container>
  );
}

export default ProductDetail;
