import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import data from "./data";
// Individual merchandise
function Merchandise({ productImage, productName, productPrice }) {
  // initial state of cart btn is false
  // const [showCart, isShown] = useState(false);

  console.log(data.productData);
  return (
    <div className="merchandise">
      <div
        className="product-image"
        style={{
          backgroundImage: `url(${productImage})`,
          width: "300px",
          height: "400px",
        }}
      ></div>

      {/* <img className="product-image" src={image} alt="product" /> */}
      <div className="product-info">
        <p className="product-name">{productName}</p>
        <p className="product-price">{productPrice}</p>
      </div>
      <div className="add-to-cart btn">
        <AiOutlineShoppingCart />
        <p>Add to cart</p>
      </div>
    </div>
  );
}

export default Merchandise;
