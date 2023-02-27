import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <h2>Food Quest</h2>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
