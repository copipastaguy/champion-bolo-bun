import React, { useState } from "react";
import { CartProvider, useCart } from "react-use-cart";
import "../../styles/Cart.css";

function Cart() {
  const {
    items,
    isEmpty,
    totalItems,
    totalUniqueItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  return (
    <CartProvider>
      <div className="cartPage">
        <h1>Cart</h1>
        {/* dont show cart if empty*/}
        <p>{totalUniqueItems} items</p>
        <div className="table-headers">
          <h3 className="table-cell">Products</h3>
          <h3 className="table-cell">Price</h3>
          <h3 className="table-cell">Quantity</h3>
          <h3 className="table-cell">Subtotal</h3>
        </div>

        {items.map((item, index) => {
          return (
            <div className="table" key={index}>
              <div className="table-cell" style={{ order: "1" }}>
                <img src={item.productImage} style={{ height: "10rem" }} />
              </div>
              <div className="table-cell" style={{ order: "1" }}>
                <p>{item.productName}</p>
              </div>

              <div className="table-cell" style={{ order: "2" }}>
                <p>${item.productPrice}</p>
              </div>

              <div className="table-cell" style={{ order: "3" }}>
                <p>{item.quantity}</p>
              </div>

              <div className="table-cell" style={{ order: "4" }}>
                <p>${item.taxPrice} (incl. tax)</p>
              </div>
            </div>
          );
        })}
      </div>
    </CartProvider>
  );
}

export default Cart;
