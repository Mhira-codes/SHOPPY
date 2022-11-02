import React from 'react'
import './App.css';
import Header from './component/Header/Header';
import Hero from './component/Hero/Hero';
import Slider from './component/Slider/Slider';

function App() {
  return (
    <div className="App">
    <Header/>
    <div className='mt-7'>
    <Hero />
    </div>
<div>
<Slider/>
</div>
    
    </div>
  );
}

export default App;
