import React from "react";
import { useCart } from "../Context/cart-context";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
function Cart() {
  const { cart, cartDispatch } = useCart();
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
    <div>
      {cart.items.length > 0 ? (
        <div>
          <div>
            Cart Items:{" "}
            {cart.items.map((item) => (
              <ul key={item._id}>
                {item.name} - {item.price}
                <IconButton
                  onClick={() => {
                    removeProduct(item._id);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </ul>
            ))}
          </div>
          <h2>Subtotal - {cart.total}</h2>
        </div>
      ) : (
        <div>No Items in cart</div>
      )}
    </div>
  );
}

export default Cart;
