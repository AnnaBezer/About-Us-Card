import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import AboutUs from './components/about-us/AboutUs';

function App() {
  return (
    <div>
      <Navbar />
      <div className="navbar-placeholder"></div>
      <Header />
      <AboutUs />
    </div>
  )
}

export default App
