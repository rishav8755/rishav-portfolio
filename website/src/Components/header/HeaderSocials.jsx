import React from 'react'
import{BsLinkedin} from "react-icons/bs"
import{FaGithubAlt} from "react-icons/fa"
import {BsFacebook} from "react-icons/bs"
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
      <a href="https://Github.com" target="_blank"><FaGithubAlt/></a>
      <a href="https://facebook.com" target="_blank"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials
