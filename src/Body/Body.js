import React, { useState } from "react";
import { useEffect } from "react";
import "./Body.css";
import Shimmer from "./Shimmer";

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

//Filtering data for search
function filterData(searchText, resturantsList) {
  const filterdata = resturantsList.filter((resturantsList) =>
    resturantsList.data.name.toLowerCase().includes(searchText)
  );

  console.log("--------", filterdata);
  return filterdata;
}

const Body = () => {
  const [filterResturantsList, setFilterResturantsList] = useState([]);
  const [allResturants, setAllResturants] = useState([]);
  //Search text to be searched
  const [searchText, setSearchText] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    resturantsData();
    console.log("isnide useeffect");
  }, []);

  async function resturantsData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.6118405&lng=85.1525092&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log("Json data", json);
    setFilterResturantsList(json?.data?.cards[2]?.data?.data?.cards);
    setAllResturants(json?.data?.cards[2]?.data?.data?.cards);
    // console.log("------------", json?.data?.cards[3]?.data?.data?.cards);
  }

  console.log("resturants", filterResturantsList);

  return (
    <>
      {/* {Input field for search text} */}
      {console.log("Inside function")}
      <input
        type="text"
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
        placeholder="Search"
      />
      {/* {Button for search Text} */}
      <button
        onClick={(e) => {
          const data = filterData(searchText, allResturants);
          setFilterResturantsList(data);
        }}
      >
        Search
      </button>
      {allResturants.length == 0 ? (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 ">
          {Array(10)
            .fill("")
            .map((e, i) => {
              return (
                <div className="container" key={i}>
                  <div className="col mt-5">
                    <Shimmer />
                  </div>
                </div>
              );
            })}
        </div>
      ) : filterResturantsList.length == 0 ? (
        <>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 ">
            <h2>No Item Matches Your Search</h2>
          </div>
        </>
      ) : (
        <>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 ">
            {filterResturantsList.map((curelem, index) => {
              return (
                <div className="container" key={curelem.data.id}>
                  <div className="col mt-5">
                    <Cards
                      img={
                        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                        curelem.data.cloudinaryImageId
                      }
                      title={curelem.data.name}
                      desc={curelem.data.cuisines.join(", ")}
                      ratings={curelem.data.avgRating + "*"}
                      key={curelem.data.id}
                      linkText={"View Resturant"}
                      link={"/resturant/" + curelem.data.id}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Body;
//

<></>;
