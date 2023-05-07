import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import userContext from "../Utils/UserContext";

const Header = () => {
  const { user } = useContext(userContext);
  return (
    <>
      <div className="header">
        <h2>Food Quest</h2>
        {user.name}&nbsp;
        {user.email}
        <div className="nav-items">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>

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
