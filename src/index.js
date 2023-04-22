import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Aboutus from "./Header/Aboutus";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
// import Contact from "./Header/Contact";
import Error from "./Error";
import Body from "./Body/Body";
import ResturantMenu from "./ResturantMenu";
import Shimmer from "./Body/Shimmer";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Contact = lazy(() => import("./Header/Contact"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/aboutus",
        element: <Aboutus />,
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h2>Hello baby I love you</h2>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/resturant/:id",
        element: <ResturantMenu />,
      },
    ],
  },
]);

root.render(
  // <React.StrictMode>
  <RouterProvider router={appRouter} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
