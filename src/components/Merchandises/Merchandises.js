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
            productPrice={item.productPrice}
            taxPrice={item.taxPrice}
            key={index}
            item={item}
          />
        );
      })}
    </div>
  );

  // <Merchandise
  //   productImage="https://via.placeholder.com/300x400"
  //   productName="Champion's Shopping Bag"
  //   productPrice="$35.00"
  // />
  // <Merchandise
  //   productImage="https://via.placeholder.com/300x400"
  //   productName="Champion's Baseball Cap"
  //   productPrice="$25.00"
  // />
  // <Merchandise
  //   productImage="https://via.placeholder.com/300x400"
  //   productName="Bolo Bun Pin"
  //   productPrice="$5.00"
  // />
  // <Merchandise
  //   productImage="https://via.placeholder.com/300x400"
  //   productName="Champion's Shopping Bag + Bolo Bun Pin Bundle"
  //   productPrice="$37.00"
  // />
  // <Merchandise
  //   productImage="https://via.placeholder.com/300x400"
  //   productName="Champion's Cap + Bolo Bun Pin Bundle"
  //   productPrice="$27.00"
  // />
  // <Merchandise
  //   productImage="https://via.placeholder.com/300x400"
  //   productName="Champion's Shopping Bag + Bolo Bun Pin + Champion's Cap Bundle"
  //   productPrice="$60.00"
  // />
}

export default Merchandises;
