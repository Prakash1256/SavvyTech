import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';

// import DeliveryModels from './components/DileveryModel';
import CoreValues from './components/coreValues';
import WhyChooseUs from './components/WhyChooseUs';

function App() {
  

  return (
    <>
     <Navbar/>
     <HeroSection/>
     <AboutUs/>
     <CoreValues/>
     {/* <DeliveryModels/> */}
     <WhyChooseUs/>
    </>
  )
}

export default App;
