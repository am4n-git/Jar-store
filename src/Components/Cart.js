import React from "react";
import { useSubTotal } from "../Context/cart-context";
function Cart() {
  const { state } = useSubTotal();
  console.log(state.items);
  return (
    <div>
      {state.total > 0 ? (
        <div>Cart Items:{state.items.map((item) => item.name)}</div>
      ) : (
        <div>No Items in cart</div>
      )}
      <h2>Subtotal - {state.total}</h2>
    </div>
  );
}

export default Cart;
