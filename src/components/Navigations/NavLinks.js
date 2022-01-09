import { Link } from "react-router-dom";
import classes from "../../styles/NavBar.module.css";
import Logo from "../../assets/icons/logo300x.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgInstagram } from "react-icons/cg";

function NavLinks() {
  return (
    <div className={classes.navBar}>
      <div className={classes.navLinks}>
        <Link to="/">
          <img className={classes.logo} src={Logo} alt="logo" />
        </Link>

        <Link to="/about">
          <p>About</p>
        </Link>

        <Link to="/champions">
          <p>Champions</p>
        </Link>

        {/* <Link to="/contact">
          <p>Contact</p>
        </Link> */}

        <Link to="/menu">
          <p>Menu</p>
        </Link>

        {/* <Link to="/cart">
          <AiOutlineShoppingCart className={classes.cartIcon} size="40px" />
        </Link> */}
      </div>

      <div className={classes.socialMediaIcons}>
        <a href="https://www.instagram.com/championflagship/" target="_blank" rel="noreferrer">
          <CgInstagram size="30px" color="black" />
        </a>
      </div>
    </div>
  );
}

export default NavLinks;
