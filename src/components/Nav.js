import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div id="nav-container">
      <ul>
        <li className="nav-item">Home</li>
        <li className="nav-item">Content</li>
        <li className="nav-item">About</li>
      </ul>
    </div>
  );
};

export default Nav;
