import { Link, useNavigate } from "react-router-dom";
import classes from "./NavBar.module.css";
import NavLinks from "./NavLinks";
import Logo from "./logo300x.png";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

function MobileNavigation() {
  // set menu !open
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <HiMenuAlt2
      className={classes.hamburgerIcon}
      size="50px"
      color="black"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <IoMdClose
      className={classes.hamburgerIcon}
      size="50px"
      color="black"
      onClick={() => setOpen(!open)}
    />
  );
  return (
    <div className={classes.mobileNavigation}>
      {/* <Link to="/">
        <img className={classes.logo} src={Logo} alt="logo" />
      </Link> */}

      {/* if menu is open, show closeicon else show hamburger */}
      {open ? closeIcon : hamburgerIcon}

      {/* if menu is open show nav links */}
      {open && <NavLinks />}
    </div>
  );
}

export default MobileNavigation;
