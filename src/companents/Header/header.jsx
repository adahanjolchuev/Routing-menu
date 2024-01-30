import React from "react";
import logo from "../../img/logo.svg";
import "./header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <img src={logo} alt="" />
          <nav>
            <NavLink to="/">Menu</NavLink>
            <NavLink to="/Orders">Orders</NavLink>
            <NavLink to="/Admin">Admin</NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
