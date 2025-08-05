import React, { useState, useEffect } from 'react'
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai"
import { BiBook, BiMessageSquareDetail } from "react-icons/bi"
import { RiServiceLine, RiBriefcaseLine } from "react-icons/ri"
import { MdWork } from "react-icons/md"

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home')

  const navItems = [
    { href: '#home', icon: <AiOutlineHome />, label: 'Home' },
    { href: '#about', icon: <AiOutlineUser />, label: 'About' },
    { href: '#experience', icon: <BiBook />, label: 'Experience' },
    { href: '#services', icon: <RiServiceLine />, label: 'Services' },
    { href: '#portfolio', icon: <RiBriefcaseLine />, label: 'Portfolio' },
    { href: '#contact', icon: <BiMessageSquareDetail />, label: 'Contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.href.substring(1),
        element: document.querySelector(item.href)
      })).filter(section => section.element)

      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveNav(`#${section.id}`)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setActiveNav(href)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <nav className="main-nav">
      <div className="nav-container">
        {navItems.map((item, index) => (
          <a 
            key={item.href}
            href={item.href} 
            onClick={(e) => {
              e.preventDefault()
              handleNavClick(item.href)
            }}
            className={`nav-link ${activeNav === item.href ? 'active' : ''}`}
            aria-label={item.label}
            title={item.label}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-tooltip">{item.label}</span>
          </a>
        ))}
        <div className="nav-indicator"></div>
      </div>
    </nav>
  )
}

export default Nav