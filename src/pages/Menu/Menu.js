import "../../styles/Menu.css";
import MenuImage from "../../assets/images/champion-menu.jpg";
import ScrollPageDown from "../About/About.js";

function Menu() {
  return (
    <div className="menuPage">
      {/* <h3>Menu</h3> */}
      <img className="menuImage" src={MenuImage} alt="champion menu" />
      <div className="merchBtn btn" onClick={ScrollPageDown}>
        View Merchandise
      </div>

      <div className="merchPage">
        <h3>Merch</h3>
      </div>
    </div>
  );
}

export default Menu;
