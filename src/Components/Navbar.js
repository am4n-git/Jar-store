import React from "react";
import "../App.css";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/">Home</Link>
        <ul className="navbar-items">
          <li>
            <Link className="nav-list bg-sky-500 hover:bg-sky-700" to="/login">
              Login
            </Link>
          </li>

          <li>
            <Link className="nav-list bg-sky-500 hover:bg-sky-700" to="/cart">
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
