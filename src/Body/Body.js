import React, { useState } from "react";
import { useEffect } from "react";

const Cards = (props) => (
  <div className="card" style={{ width: "18rem" }}>
    <img className="card-img-top" src={props.img} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>

      <p className="card-text">{props.desc}</p>
      <p className="card-text">{props.ratings}</p>
      <a href={props.link} className="btn btn-primary">
        {props.linkText}
      </a>
    </div>
  </div>
);

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
    console.log("Json data", json);
    setResturantsList(json?.data?.cards[2]?.data?.data?.cards);
    // console.log("------------", json?.data?.cards[3]?.data?.data?.cards);
  }

  console.log("resturants", resturantsList);

  return (
    <>
      {resturantsList.map((curelem, index) => {
        return (
          <Cards
            img={
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
              curelem.data.cloudinaryImageId
            }
            title={curelem.data.name}
            desc={curelem.data.cuisines.join(", ")}
            ratings={curelem.data.avgRating}
            key={curelem.data.id}
          />
        );
      })}
    </>
  );
};

export default Body;
