import classes from "../../styles/NavBar.module.css";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

function NavBar() {
  return (
    <div className={classes.navBar}>
      <Navigation />
      <MobileNavigation />
    </div>
  );
}

export default NavBar;
