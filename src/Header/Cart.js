import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItem from "../Utils/FoodItem";
import { clearCart } from "../Utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  console.log(cartItems);
  return (
    <>
      <div>Cart items-{cartItems.length}</div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 ">
        {cartItems.map((curelem) => {
          return (
            <>
              <FoodItem key={curelem.id} {...curelem} />
            </>
          );
        })}
      </div>

      <button
        className="btn btn-danger"
        style={{ marginTop: "20px" }}
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>

      <button
        className="btn btn-danger"
        style={{ marginTop: "20px", marginLeft: "50px" }}
        onClick={() => handleClearCart()}
      >
        Checkout
      </button>
    </>
  );
};

export default Cart;
