import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ResturantMenu = () => {
  const [resturant, setResturant] = useState({});
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
  }

  console.log("id", id);
  console.log(resturant);
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
    </>
  );
};

export default ResturantMenu;
