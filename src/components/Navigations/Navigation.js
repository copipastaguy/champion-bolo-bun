import NavLinks from "./NavLinks";
import classes from "./NavBar.module.css";
function Navigation() {
  return (
    <div className={classes.navigation}>
      <NavLinks />
    </div>
  );
}

export default Navigation;
