import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Aboutus from "./Header/Aboutus";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import UserContext from "./Utils/UserContext";
import { Provider } from "react-redux";
import store from "./Utils/Store";

function App() {
  const [user, setUser] = useState({
    name: "mukund madhav",
    email: "muk772@gmail.com",
  });
  return (
    <div className="App">
      <Provider store={store}>
        <UserContext.Provider value={{ user: user, setUser: setUser }}>
          <Header />

          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </div>
  );
}

export default App;
