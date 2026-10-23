import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import HeroSection from './pages/HeroSection/HeroSection'
import Gameplay from './pages/Gameplay/Gameplay'
import AboutUs from './pages/AboutUs/AboutUs'
import Roadmap from './pages/Roadmap/Roadmap'
import Footer from './components/Footer'
import Seperator from './components/Seperator'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <div className="appSections">
           <HeroSection />
           <Seperator/>
            <Gameplay />
            <Seperator/>
            <Roadmap />
            <Seperator/>
            <AboutUs />
        </div>
        <Footer/>
       
          
      </BrowserRouter>
    </>
  )
}

export default App
