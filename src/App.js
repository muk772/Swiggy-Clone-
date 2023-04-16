import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Aboutus from "./Header/Aboutus";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    </div>
  );
}

export default App;
