import { useState } from "react";
import { useCart } from "react-use-cart";
import { AiOutlineShoppingCart } from "react-icons/ai";

// Individual merchandise
function Merchandise({
  productImage,
  productName,
  productPrice,
  item,
}) {
  // const [feedback, setFeedback] = useState("");
  const { addItem } = useCart();

  return (
    <div className="merchandise">
      {/* <p className="added-feedback">{feedback}</p> */}
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
        <p className="product-price">${productPrice}</p>
      </div>
      <div
        className="add-to-cart btn"
        onClick={function (event) {
          console.log("item added to cart");
          addItem(item);
          // setFeedback("Item added to cart");
        }}
      >
        <AiOutlineShoppingCart />
        <p>Add to cart</p>
      </div>
    </div>
  );
}

export default Merchandise;
