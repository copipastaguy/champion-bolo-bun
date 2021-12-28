import { Link } from "react-router-dom";
import "../../styles/HomeContent.css";

import Logo from "../../assets/icons/logo300x.png";
function HomeContent() {
  return (
    <div className="homeMasthead container">
      {/* MASTHEAD IMAGES */}
      <img className="masthead-logo" src={Logo} alt="champion-logo" />

      {/* Route to about page */}
      <Link to="/about">
        <div className="aboutButton btn"></div>
      </Link>
    </div>
  );
}

export default HomeContent;
