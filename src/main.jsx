import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Navbar } from './Components/Navbar.jsx'
import { Hero } from './Components/Hero.jsx'
import { Quotes } from './Components/Quotes.jsx'
import Footer from './Components/Footer.jsx'
import Home from './Components/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
   <Home/>
    <Hero/>
    <Quotes/>
    <Footer/>
  </React.StrictMode>,
)
