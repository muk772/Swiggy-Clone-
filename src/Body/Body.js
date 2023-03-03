import React, { useState } from "react";
import { useEffect } from "react";

const Body = () => {
  const [resturantsList, setResturantsList] = useState([]);
  useEffect(() => {
    resturantsData();
  }, []);

 
  async function resturantsData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.894621997950024&lng=77.61992063373327&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("Json---", json);
    setResturantsList(json?.data?.cards[2]?.data?.data?.cards);
    console.log("resturants inside console", resturantsList);
  }

  console.log("resturants", resturantsList);
  
  return <div>Body</div>;
};

export default Body;
