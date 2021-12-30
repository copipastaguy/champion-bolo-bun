import React from "react";
import {CartProvider } from "react-use-cart";

function Cart() {
  return (
    <CartProvider>
    <div className="cartPage">
      <h1>Cart</h1>
    </div>
    </CartProvider>
  );
}

export default Cart;
