import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
      {/* 

      --Header
      --Body
          -Search box
          -resturant card
        
      --Footer
       */}
    </div>
  );
}

export default App;
