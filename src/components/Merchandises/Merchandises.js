// All merchandise
import "../../styles/Merchandise.css";
import data from "./data";
import Merchandise from "./Merchandise.js";

function Merchandises() {
  return (
    <div className="merchandises">
      {data.productData.map((item, index) => {
        return (
          <Merchandise
            productImage={item.productImage}
            productName={item.productName}
            productPrice={item.price}
            taxPrice={item.taxPrice}
            key={index}
            item={item}
          />
        );
      })}
    </div>
  );
}

export default Merchandises;
