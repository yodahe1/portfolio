import logo from "../../assets/logo.jpg";

import "./Navbar.css";
// Yodi I can access you vs now
// write something if you are seeing my actions now
//wellcome sari
const Navbar = () => {
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
      <ul className="nav-menu">
        <a href="/">Home </a>
        <a href="/About"> About </a>
        <a href="/Services"> Services</a>
        <a href="/Portfolio"> Portfolio</a>
        <a href="/Mycontact"> Contact Me</a>
      </ul>
      <div className="nav-connect">
        {" "}
        <a href="/Mycontact" className="">
          {" "}
          connect with me{" "}
        </a>
      </div>
    </div>
  );
};

export default Navbar;
