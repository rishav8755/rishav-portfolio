import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from "../../photo/me.jpg"
import HeaderSocials from './HeaderSocials'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Rishav Patel</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />


        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <Link to="#contact" className='scroll__down'>Scroll Down</Link>
      </div>

    </header>
  )
}

export default Header
