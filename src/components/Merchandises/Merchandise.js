import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
// Individual merchandise
function Merchandise({ producImage, productName, productPrice }) {
  // initial state of cart btn is false
  // const [showCart, isShown] = useState(false);

  return (
    <div className="merchandise">
      <div
        className="product-image"
        style={{
          backgroundImage: `url(${producImage})`,
          width: "300px",
          height: "400px",
        }}
      ></div>

      {/* <img className="product-image" src={image} alt="product" /> */}
      <div className="product-info">
        <p className="product-name">{productName}</p>
        <p className="product-price">{productPrice}</p>
      </div>
      <div className="add-to-cart btn" >
        <AiOutlineShoppingCart />
        <p>Add to cart</p>
      </div>
    </div>
  );
}

export default Merchandise;
