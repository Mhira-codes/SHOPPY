import React from "react";
import "./App.css";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import Product from "./component/Products/Product";
import Rate from "./component/Rate/Rate";
import Slider from "./component/Slider/Slider";
import Testimonial from "./component/Testimonial/Testimonial";
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
      <div>
        <Rate/>
        <Testimonial/>
      </div>
      <div>
<Footer/>
      </div>
    </div>
  );
}

export default App;
