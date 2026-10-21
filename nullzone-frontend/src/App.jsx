import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navigation from './components/Navigation'
import HeroSection from './pages/HeroSection/HeroSection'
import Gameplay from './pages/Gameplay/Gameplay'
import AboutUs from './pages/AboutUs/AboutUs'
import Roadmap from './pages/Roadmap/Roadmap'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <div className="appSections">
           <HeroSection />
            <Gameplay />
            <AboutUs />
            <Roadmap />
        </div>
        <Footer/>
       
          
      </BrowserRouter>
    </>
  )
}

export default App
