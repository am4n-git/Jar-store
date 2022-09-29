import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="title">Jar Store</div>
        <ul className="navbar-items">
          <li className="nav-list bg-sky-500 hover:bg-sky-700">
            <a href="google.com">Login</a>
          </li>
          <li className="nav-list">
            <a href="google.com"></a>
          </li>
          <li className="nav-list">
            <a href="google.com">Cart</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
