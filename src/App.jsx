import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CoreValues from './components/CoreValues';
import AboutSection from './components/AboutSection';
import Service1 from './components/Service1';
import WhyChooseUs from './components/WhyChooseUs';
import Models from './components/Models';





function App() {
  

  return (
    <>
   <Navbar/>
   <HeroSection/>
   <AboutSection/>
   <CoreValues/>    
   <Service1/>
   <WhyChooseUs/>
   <Models/>

    </>
  )
}

export default App;
