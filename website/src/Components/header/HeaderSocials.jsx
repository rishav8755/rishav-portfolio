import React from 'react'
import { BsLinkedin, BsGithub, BsTwitter, BsInstagram } from "react-icons/bs"
import { MdEmail } from "react-icons/md"

const HeaderSocials = () => {
  const socials = [
    {
      icon: <BsLinkedin />,
      url: "https://linkedin.com/in/rishavpatel",
      label: "LinkedIn Profile",
      name: "LinkedIn"
    },
    {
      icon: <BsGithub />,
      url: "https://github.com/rishavpatel",
      label: "GitHub Profile",
      name: "GitHub"
    },
    {
      icon: <BsTwitter />,
      url: "https://twitter.com/rishavpatel",
      label: "Twitter Profile",
      name: "Twitter"
    },
    {
      icon: <MdEmail />,
      url: "mailto:rishav@example.com",
      label: "Email Contact",
      name: "Email"
    }
  ]

  return (
    <div className='header_socials fade-in'>
      {socials.map((social, index) => (
        <a 
          key={index}
          href={social.url} 
          target={social.name !== 'Email' ? "_blank" : "_self"}
          rel={social.name !== 'Email' ? "noopener noreferrer" : ""}
          aria-label={social.label}
          className="social-link"
          style={{ animationDelay: `${1.4 + index * 0.1}s` }}
        >
          {social.icon}
          <span className="social-tooltip">{social.name}</span>
        </a>
      ))}
    </div>
  )
}

export default HeaderSocials
