import "../../styles/Menu.css";
import MenuImage from "../../assets/images/champion-menu.jpg";
import "../../components/Merchandises/Merchandises";

// Destructure function
import Button from "../../components/Button/Button";
import { ScrollPageDown } from "../../components/Button/Button";
import Merchandises from "../../components/Merchandises/Merchandises";

function Menu() {
  return (
    <div className="menuPage">
      <img className="menuImage" src={MenuImage} alt="champion menu" />
      <Button
        className="view-merch-btn btn"
        text="View Merchandise"
        runFunction={ScrollPageDown}
      />

      <div className="merchPage">
        <Merchandises />
      </div>
    </div>
  );
}

export default Menu;
