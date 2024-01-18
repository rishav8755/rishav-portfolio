import React from 'react'
import "./index.css"
import Header from "./Components/header/Header"
import Nav from "./Components/nav/Nav"
import About from "./Components/about/About"
import Experience from "./Components/experience/Experience"
import Services from "./Components/sevice/Services"
import Portfolio from './Components/protfolio/Portfolio'
import Contact from "./Components/contact/Contact"
import Footer from "./Components/footer/Footer"
import Testimonials from './Components/testimonials/Testimonials'
const App = () => {
  return (
    <> 
      <Header/>
       <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/> 
      </>
  )
}

export default App
