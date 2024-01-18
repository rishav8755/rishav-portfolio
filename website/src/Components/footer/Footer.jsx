import React from 'react'
import "./footer.css"
import {FaInstagram} from "react-icons/fa"
import { BsLinkedin} from "react-icons/bs"
import { FaFacebook} from "react-icons/fa"
const Footer = () => {
  return (
     <footer>
      <a href="#" className='footer_logo'>EGATOR</a>

      <ul className='premalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href="https://instagram.com">< FaInstagram/></a>
        <a href="https://linkdin.com"><BsLinkedin/></a>
        <a href="https://facebook.com"><FaFacebook/></a>

      </div>
      <div className="footer_copyright">
        <small>&copy;EGATOR Tutorials.All right reserved.</small>
      </div>
     </footer>
  )
}

export default Footer
