import React from "react";
import "./Nav.css";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <logo className="logo">#SHIVIN</logo>
        <ul>
          <li>About</li>
          <li>Service</li>
          <li>Blog</li>
          <li>Apply Online</li>
          <li>Download</li>
          <li>Contact</li>
        </ul>

        <input className="search" type="text" placeholder="Search" />
      </nav>
    </>
  );
};
