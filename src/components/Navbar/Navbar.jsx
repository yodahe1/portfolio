import logo from "../../assets/logo.jpg";
import toggle from "../../assets/icons8-menu-50.png";
import close from "../../assets/icons8-close-50.png";

import "./Navbar.css";
import { useRef } from "react";
// Yodi I can access you vs now
// write something if you are seeing my actions now
//wellcome sari
const Navbar = () => {
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={logo} alt="" className="logo" />
        <h1>
          {" "}
          <a href="/" className="">
            Yodahe M.{" "}
          </a>{" "}
        </h1>
      </div>
      <img src={toggle} onClick={openMenu} alt="" className="menu-bar" />
      <div>
        <ul ref={menuRef} className="nav-menu">
          <img src={close} onClick={closeMenu} alt="" className="menu-close" />
          <li>
            <a href="/">Home </a>
          </li>
          <li>
            <a href="/About"> About </a>
          </li>
          <li>
            <a href="/Services"> Services</a>
          </li>
          <li>
            <a href="/Portfolio"> Portfolio</a>
          </li>
          <li>
            <a href="/Mycontact"> Contact Me</a>
          </li>
        </ul>
      </div>

      <div className="nav-connect">
        <a href="/Mycontact" className="connect">
          connect with me
        </a>
      </div>
    </div>
  );
};

export default Navbar;
