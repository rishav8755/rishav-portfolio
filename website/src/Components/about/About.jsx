import React, { useState, useEffect, useRef } from 'react'
import "./about.css"
import ME from "../../photo/me.jpg"
import { FaAward, FaUsers, FaCode, FaCoffee } from "react-icons/fa"
import { VscFolderLibrary } from "react-icons/vsc"
import { MdWork } from "react-icons/md"

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  // Animated counter hook
  const useCounter = (end, duration = 2000, start = 0) => {
    const [count, setCount] = useState(start)
    
    useEffect(() => {
      if (!isVisible) return
      
      let startTime
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime
        const progress = (currentTime - startTime) / duration
        
        if (progress < 1) {
          setCount(Math.floor(start + (end - start) * progress))
          requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }
      
      requestAnimationFrame(animate)
    }, [isVisible, end, duration, start])
    
    return count
  }

  const yearsExp = useCounter(3)
  const projectsCount = useCounter(25)
  const clientsCount = useCounter(10)
  const coffeeCount = useCounter(500)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skills = [
    { name: "JavaScript", level: 95 },
    { name: "React", level: 92 },
    { name: "Node.js", level: 88 },
    { name: "TypeScript", level: 85 },
    { name: "Python", level: 80 },
    { name: "MongoDB", level: 85 },
    { name: "PostgreSQL", level: 82 },
    { name: "AWS", level: 78 }
  ]

  return (
    <section id='about' ref={sectionRef}>
      <h5 className="section-subtitle">Get To Know</h5>
      <h2 className="section-title">About Me</h2>
      
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Rishav Patel" />
          </div>
          <div className="about__me-overlay">
            <div className="experience-badge">
              <span className="experience-years">{yearsExp}+</span>
              <span className="experience-text">Years Experience</span>
            </div>
          </div>
        </div>

        <div className="about__content">
          <div className='about__cards'>
            <article className='about__card card'>
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>{yearsExp}+ Years Professional</small>
            </article>
            
            <article className='about__card card'>
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>{projectsCount}+ Completed</small>
            </article>
            
            <article className='about__card card'>
              <FaUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>{clientsCount}+ Satisfied</small>
            </article>
            
            <article className='about__card card'>
              <FaCoffee className="about__icon"/>
              <h5>Coffee Cups</h5>
              <small>{coffeeCount}+ Consumed</small>
            </article>
          </div>

          <div className="about__description">
            <p>
              I'm a passionate Full Stack Developer with {yearsExp}+ years of experience crafting 
              digital solutions that make a difference. I specialize in building scalable web 
              applications using modern technologies like React, Node.js, and cloud platforms.
            </p>
            <p>
              My journey in tech started with curiosity and has evolved into a deep passion for 
              creating exceptional user experiences and robust backend systems. I believe in 
              writing clean, maintainable code and staying updated with the latest industry trends.
            </p>
          </div>

          <div className="skills-section">
            <h3 className="skills-title">Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={skill.name} className="skill-item" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about__cta">
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            <a href="/resume.pdf" className='btn' download>Download CV</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
