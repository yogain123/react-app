import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div
      style={{
        margin: 50,
        backgroundColor: "greenyellow",
        display: "flex",
        justifyContent: "space-between",
        padding: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexBasis: 300,
        }}
      >
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexBasis: 300,
        }}
      >
        <div>
          <Link to="/profile">Profile</Link>
        </div>
        <div>
          <Link to="/setting">Setting</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
