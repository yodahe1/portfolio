import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.jpg";
import user from "../../assets/icons8-user-32.png";

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" />
          <p>I am experienced front end web developer</p>
        </div>
        <div className="footer-top-right">
          <div className="email-input">
            <img src={user} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          &copy; 2024 Yodahe Meless. All rights reserved
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
