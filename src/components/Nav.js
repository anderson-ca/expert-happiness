import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div id="nav-container">
      <ul>
        <li>
          <Link className="nav-item" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/flags">
            Content
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/about">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
