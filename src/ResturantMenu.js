import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addItem } from "./Utils/cartSlice";
import { useDispatch } from "react-redux";

const ResturantMenu = () => {
  const [resturant, setResturant] = useState({});
  const [menuItems, setMenuItems] = useState([]);
  const [menudata, setMenuData] = useState([]);
  useEffect(() => {
    getResturantInfo();
  }, []);

  const { id } = useParams();
  async function getResturantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.721615178262443&lng=71.6561298072338&restaurantId=${id}&submitAction=ENTER`
    );
    const json = await data.json();
    setResturant(json.data?.cards[0]?.card?.card?.info);
    console.log(
      json.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
    setMenuData(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
  }

  menudata.map((curelem) => {
    // console.log(curelem?.card?.info);
    return menuItems.push(curelem?.card?.info);
  });

  console.log("id", id);
  console.log(resturant);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    console.log(item);
    dispatch(addItem(item));
  };

  return (
    <>
      <div>ResturantMenu:{id}</div>
      <h2>{resturant.name}</h2>
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          resturant.cloudinaryImageId
        }
      />
      <h4>
        {resturant?.areaName} ----- {resturant?.costForTwoMessage}
      </h4>

      {menuItems.map((curelem) => {
        return (
          <div key={curelem.id}>
            <li>
              {curelem.name}{" "}
              <button onClick={() => handleAddItem(curelem)}>Add Item</button>
            </li>
          </div>
        );
      })}
    </>
  );
};

export default ResturantMenu;
