import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log("error----->", err);
  return (
    <div>
      oops <h4>{err.status}</h4>
      <h3>{err.statusText}</h3>
    </div>
  );
};

export default Error;
