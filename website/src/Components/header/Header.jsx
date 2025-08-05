import React, { useState, useEffect } from 'react'
import "./header.css"
import CTA from './CTA'
import ME from "../../photo/me.jpg"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const words = [
    'Full Stack Developer',
    'React Specialist',
    'UI/UX Enthusiast',
    'Problem Solver',
    'Tech Innovator'
  ]

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % words.length
      const fullText = words[current]

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      )

      setTypingSpeed(isDeleting ? 75 : 150)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleType, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, words])

  useEffect(() => {
    // Add animation classes when component mounts
    const header = document.querySelector('.header__container')
    if (header) {
      header.classList.add('fade-in')
    }
  }, [])

  return (
    <header id="home">
      {/* Animated background elements */}
      <div className="header__bg">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
      </div>

      <div className="container header__container">
        <div className="header__content">
          <h5 className="header__greeting">Hello, I'm</h5>
          <h1 className="header__name">
            <span className="name-highlight">Rishav</span>{' '}
            <span className="name-secondary">Patel</span>
          </h1>
          <h2 className="header__role">
            <span className="typing-text">{text}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="header__description">
            Passionate about creating exceptional digital experiences with clean, 
            efficient code and innovative solutions that drive business growth.
          </p>
          <CTA />
        </div>

        <HeaderSocials />

        <div className="me">
          <div className="me__wrapper">
            <img src={ME} alt="Rishav Patel - Full Stack Developer" />
            <div className="me__border"></div>
          </div>
        </div>

        <a href="#about" className='scroll__down' aria-label="Scroll to about section">
          <span>Scroll Down</span>
          <div className="scroll__indicator">
            <div className="scroll__wheel"></div>
          </div>
        </a>
      </div>
    </header>
  )
}

export default Header
