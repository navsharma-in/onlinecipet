import React, { useState } from "react";
import "./Nav.css";
import { Link, NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="navbar">
        <logo className="logo">#SHIVIN</logo>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink to="/Service">Service</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Blog">Blog</NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "" : "active")}
          onClick={() => setOpen(!open)}
        >
          ApplyOnline
          {/* Dropdown */}
          {open && <Dropdown open={open} />}
        </NavLink>
        <NavLink to="/Download">Download</NavLink>
        <NavLink to="/FeeStructure">FeeStructure</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
      </div>
    </>
  );
};

export default Navbar;
