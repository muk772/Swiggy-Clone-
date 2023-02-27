import React from "react";
import { useEffect } from "react";

const Body = () => {
  useEffect(() => {
    resturantsData();
  }, []);

  const resturantsData = () => {
    fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.894621997950024&lng=77.61992063373327&page_type=DESKTOP_WEB_LISTING"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return <div>Body</div>;
};

export default Body;
