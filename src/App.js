import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import Product from "./component/Products/Product";
import Slider from "./component/Slider/Slider";
import VIrtual from "./component/Virtual/VIrtual";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mt-7">
        <Hero />
      </div>
      <div>
        <Slider />
      </div>
      <div>
        <VIrtual />
      </div>
      <div>
        <Product/>
      </div>
    </div>
  );
}

export default App;
