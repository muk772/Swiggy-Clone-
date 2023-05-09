import React from "react";
import { removeItem } from "./cartSlice";
import { useDispatch } from "react-redux";

const FoodItem = ({ name, price, imageId, id }) => {
  const dispatch = useDispatch();
  const handleRemoveItem = (id) => {
    console.log(id);
    dispatch(removeItem(id));
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          imageId
        }
        alt=""
      />
      <div className="card-body">
        <p>{name}</p>
        <p>Rs {price / 100}</p>
        <button
          className="btn btn-primary"
          onClick={() => handleRemoveItem(id)}
        >
          Remove Item
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
