import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
const rocketsImage =
  "https://images.unsplash.com/photo-1636819488537-a9b1ffb315ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80";
function Banner() {
  return (
    <div className="banner">
      <img src={rocketsImage} alt="Rockets" className="banner-image" />
      <div className="banner-content">
        <h1>Welcome to SpaceX Rockets And Capsules !</h1>
        <p className="explore">
          Explore the advanced rockets and spacecraft by SpaceX.
        </p>
        <p className="link">
          <Link to="/search">Click here to Search you rockets</Link>
        </p>
      </div>
    </div>
  );
}

export default Banner;
