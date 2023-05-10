import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItem from "../Utils/FoodItem";
import { clearCart } from "../Utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [cartToltal, setCartTotal] = useState();

  const dispatch = useDispatch();

  const handleClearCart = () => {
    setCartTotal(0);
    dispatch(clearCart());
  };

  useEffect(() => {
    totalPrice();
  }, [cartItems.length]);

  const totalPrice = () => {
    let price = 0;
    for (var i = 0; i < cartItems.length; i++) {
      price = price + cartItems[i].price;
      setCartTotal(price / 100);
    }
  };

  const handleCheckoutCart = () => {
    alert("The price is " + cartToltal);
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
        className="btn btn-warning"
        style={{ marginTop: "20px", marginLeft: "50px" }}
        onClick={() => handleCheckoutCart()}
      >
        Pay ₹{cartToltal}
      </button>
    </>
  );
};

export default Cart;
