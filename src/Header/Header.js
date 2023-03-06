import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <h2>Food Quest</h2>
        <div className="nav-items">
          <ul>
            <li>{/* <Link to={"/home"}>Home</Link> */}</li>

            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
