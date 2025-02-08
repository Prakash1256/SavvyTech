import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import WhyChooseUs from './components/WhyChooseUs';
import Models from './components/Models';
import MainSection from './components/MainSection';
import CounterSection from './components/CounterSection';
import EdTechSolutions from './components/EdtechSolution';
import Footer from './components/Footer';
import TechnologyStack from './components/TechnologyStack';
import CoreValues from './components/coreValues';
import Service1 from './components/Service1';
import BusinessSolutions from './components/BuisnessSolutions';
import  Form  from './components/Form';
import Solution from './components/Solution';
import Ai from './components/Ai';



function App() {
    return (
    <>
   <Navbar/>
   <MainSection/>
   <AboutSection/>
   <CoreValues/>
   <Service1/> 
   <WhyChooseUs/>
   <TechnologyStack/>
   <Models/>
   <CounterSection/>
   <EdTechSolutions/>
   <BusinessSolutions/>
   <Solution/>
   <Ai/>
   <Form/>
   <Footer/>
   </>
  )
}

export default App;
