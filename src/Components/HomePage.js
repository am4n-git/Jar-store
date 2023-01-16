import React from "react";
// Material UI
import * as Mui from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
// Context Import
import { useCart } from "../Context/cart-context";
import { useProducts } from "../Context/product-data-context";
import Filter from "./Filter";

function HomePage() {
  // Context functions
  const { cart, dispatch } = useCart();
  const { products, loading, showError, errorMsg } = useProducts();
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
        <Filter />
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
