import React from "react";
import logo from "../logo/logo.png";
import "../styles/navBar.css";

const NavBar = () => {
  return (
    <>
      <div className="navbar" />
      <img className="logo" src={logo} alt="nav bar logo" />
      <ul className="navbar-links">
        <li className="navbar-links-item">View Properties</li>
        <li className="navbar-links-item">Add a Property</li>
      </ul>
      <div />
    </>
  );
};

export default NavBar;
