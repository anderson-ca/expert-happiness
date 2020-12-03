import React from "react";
import Nav from "./Nav";
import logo from "../004-worldwide.svg";

function Header() {
  return (
    <div id="header" className="root-component">
      <div id="logo-container">
        <img id="logo-img" src={logo} alt="header-logo" />
      </div>
      <Nav />
    </div>
  );
}

export default Header;
