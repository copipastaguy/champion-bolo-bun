// All merchandise
import "../../styles/Merchandise.css";
import Merchandise from "./Merchandise.js";

function Merchandises() {
  return (
    <div className="merchandises">
      <Merchandise
        producImage="https://via.placeholder.com/300x400"
        productName="Champion's Shopping Bag"
        productPrice="$35.00"
      />
      <Merchandise
        producImage="https://via.placeholder.com/300x400"
        productName="Champion's Baseball Cap"
        productPrice="$25.00"
      />
      <Merchandise
        producImage="https://via.placeholder.com/300x400"
        productName="Bolo Bun Pin"
        productPrice="$5.00"
      />
      <Merchandise
        producImage="https://via.placeholder.com/300x400"
        productName="Champion's Shopping Bag + Bolo Bun Pin Bundle"
        productPrice="$37.00"
      />
      <Merchandise
        producImage="https://via.placeholder.com/300x400"
        productName="Champion's Cap + Bolo Bun Pin Bundle"
        productPrice="$27.00"
      />
      <Merchandise
        producImage="https://via.placeholder.com/300x400"
        productName="Champion's Shopping Bag + Bolo Bun Pin + Champion's Cap Bundle"
        productPrice="$60.00"
      />
    </div>
  );
}

export default Merchandises;
