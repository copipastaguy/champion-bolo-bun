import { useEffect } from "react";
import { CartProvider, useCart } from "react-use-cart";
import "../../styles/Cart.css";
// import CartTable from "./CartTable";


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

  console.log(items)

  // if cart is empty
  if (isEmpty)
    return (
      <CartProvider>
      <div className="cartPage">
        <div className="cartPage-header">
        <h1>Cart</h1>
        <p>Your cart is empty</p>
        </div>
      </div>
      </CartProvider>
    )

  return (
    <CartProvider>
      <div className="cartPage">
        <div className="cartPage-header">
          <h1 >Cart</h1>
          <p>{totalUniqueItems} item(s)</p>

          <div className="table-headers">
            <h3 className="table-cell">Image</h3>
            <h3 className="table-cell">Products</h3>
            <h3 className="table-cell">Price</h3>
            <h3 className="table-cell">Quantity</h3>
            <h3 className="table-cell">Subtotal</h3>
          </div>

          {items.map((item, index) => {
            return (
              <div className="table" key={index}>
                {/* <div className="table-cell" style={{ order: "1" }}>
                  <img src={item.productImage} alt="product" style={{ height: "10rem" }} />
                </div> */}
                {/* <div className="table-cell" style={{ order: "2" }}>
                  <p>{item.productName}</p>
                </div> */}

                {/* <div className="table-cell" style={{ order: "3" }}>
                  <p>${item.productPrice}</p>
                </div> */}

                {/* <div className="table-cell" style={{ order: "4" }}>
                  <p>{item.quantity}</p>
                  <p onClick={updateItemQuantity(item.id, item.quantity - 1)}>-</p>
                  <p onClick={updateItemQuantity(item.id, item.quantity + 1)}>+</p>
                  <p onClick={removeItem(item.id)}>x</p>
                </div> */}

                {/* <div className="table-cell" style={{ order: "5" }}>
                  <p>${item.taxPrice} (incl. tax)</p>
                </div> */}
              </div>
            );
          })}

        </div>
      </div>
    </CartProvider>
  );
}

export default Cart;
