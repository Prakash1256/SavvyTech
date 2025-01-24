import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';

function App() {
  

  return (
    <>
     <Navbar/>
     <HeroSection/>
     <AboutUs/>
    </>
  )
}

export default App;
