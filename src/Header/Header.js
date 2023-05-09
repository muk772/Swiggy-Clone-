import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import userContext from "../Utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useContext(userContext);

  const cartItems = useSelector((store) => store.cart.items);

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
            <li>
              <Link to={"/cart"}>Cart {cartItems.length}</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
