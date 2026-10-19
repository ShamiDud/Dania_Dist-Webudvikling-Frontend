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
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <HeroSection />
        <Gameplay />
        <AboutUs />
        <Roadmap />
      </BrowserRouter>
    </>
  )
}

export default App
