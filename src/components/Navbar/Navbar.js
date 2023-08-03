import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file here

const Navbar = () => {
  return (
    <div className="navbar-container">
      {" "}
      {/* Add the "navbar-container" class */}
      <Link to="/">Home</Link>
      <div className="navbar-links">
        <div className="navbar-link">
          <Link to="/search">Search</Link>
        </div>
        <div className="navbar-link">
          <Link to="/data">Data</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
