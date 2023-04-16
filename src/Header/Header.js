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
            <li><Link to={"/"}>Home</Link></li>

            <li>
              <Link to={"/aboutus"}>About us</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
