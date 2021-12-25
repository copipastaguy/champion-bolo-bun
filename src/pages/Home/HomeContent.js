import "./HomeContent.css";
import Logo from "../../assets/icons/logo300x.png";
function HomeContent() {
  return (
    <div className="homeMasthead">
      {/* MASTHEAD IMAGES */}
      <img className="masthead-logo" src={Logo} alt="champion-logo" />
      <div className="aboutButton"></div>
    </div>
  );
}

export default HomeContent;
