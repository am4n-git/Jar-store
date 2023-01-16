import React from "react";
import { useCart } from "../Context/cart-context";
function Cart() {
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
  return (
    <div>
      {cart.items.length > 0 ? (
        <div>
          <div>
            Cart Items:{" "}
            {cart.items.map((item) => (
              <ul key={item._id}>
                {item.name} - {item.price}
                <button
                  onClick={() => {
                    removeProduct(item._id);
                  }}
                >
                  Remove
                </button>
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
