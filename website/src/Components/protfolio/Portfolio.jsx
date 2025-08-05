import React, { useState, useEffect, useRef } from 'react'
import "./portfolio.css"
import IMG1 from "../../photo/calulator.png"
import IMG2 from "../../photo/food.png"
import IMG3 from "../../photo/travel.png"
import IMG4 from "../../photo/clock.png"
import IMG5 from "../../photo/portfolio5.png"
import IMG6 from "../../photo/portfolio6.jpg"
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye } from 'react-icons/fa'
import { SiReact, SiNodedotjs, SiJavascript, SiPython, SiMongodb, SiPostgresql } from 'react-icons/si'

const Portfolio = () => {
  const [filter, setFilter] = useState('all')
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const projects = [
    {
      id: 1,
      title: "Advanced Calculator App",
      category: "frontend",
      image: IMG1,
      description: "A sophisticated calculator with scientific functions, memory operations, and responsive design. Features include arithmetic operations, trigonometric functions, and calculation history.",
      technologies: [
        { name: "React", icon: <SiReact /> },
        { name: "JavaScript", icon: <SiJavascript /> }
      ],
      github: "https://github.com/rishavpatel/calculator",
      demo: "https://rishav-calculator.netlify.app",
      featured: true
    },
    {
      id: 2,
      title: "Food Delivery Platform",
      category: "fullstack",
      image: IMG2,
      description: "Complete food ordering system with user authentication, real-time order tracking, payment integration, and admin dashboard for restaurant management.",
      technologies: [
        { name: "React", icon: <SiReact /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "MongoDB", icon: <SiMongodb /> }
      ],
      github: "https://github.com/rishavpatel/food-delivery",
      demo: "https://rishav-foodie.herokuapp.com",
      featured: true
    },
    {
      id: 3,
      title: "Travel Agency Website",
      category: "frontend",
      image: IMG3,
      description: "Modern travel agency website with destination showcase, booking forms, interactive maps, and responsive galleries. Features smooth animations and optimized performance.",
      technologies: [
        { name: "React", icon: <SiReact /> },
        { name: "JavaScript", icon: <SiJavascript /> }
      ],
      github: "https://github.com/rishavpatel/travel-agency",
      demo: "https://rishav-travels.netlify.app",
      featured: false
    },
    {
      id: 4,
      title: "Digital Clock Widget",
      category: "frontend",
      image: IMG4,
      description: "Elegant digital clock with multiple timezone support, customizable themes, alarms, and stopwatch functionality. Perfect for desktop integration.",
      technologies: [
        { name: "JavaScript", icon: <SiJavascript /> }
      ],
      github: "https://github.com/rishavpatel/digital-clock",
      demo: "https://rishav-clock.netlify.app",
      featured: false
    },
    {
      id: 5,
      title: "Task Management Dashboard",
      category: "fullstack",
      image: IMG5,
      description: "Comprehensive project management tool with team collaboration, time tracking, file sharing, and progress analytics. Built for productivity and efficiency.",
      technologies: [
        { name: "React", icon: <SiReact /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> }
      ],
      github: "https://github.com/rishavpatel/task-manager",
      demo: "https://rishav-taskmanager.herokuapp.com",
      featured: true
    },
    {
      id: 6,
      title: "AI Chat Assistant",
      category: "backend",
      image: IMG6,
      description: "Intelligent chatbot powered by machine learning, natural language processing, and contextual understanding. Provides personalized responses and learning capabilities.",
      technologies: [
        { name: "Python", icon: <SiPython /> },
        { name: "Node.js", icon: <SiNodedotjs /> }
      ],
      github: "https://github.com/rishavpatel/ai-chatbot",
      demo: "https://rishav-ai-assistant.herokuapp.com",
      featured: false
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'backend', name: 'Backend' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id='portfolio' ref={sectionRef}>
      <h5 className="section-subtitle">My Recent Work</h5>
      <h2 className="section-title">Portfolio</h2>

      {/* Filter Buttons */}
      <div className="portfolio__filters">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`filter-btn ${filter === category.id ? 'active' : ''}`}
            onClick={() => setFilter(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="container portfolio__container">
        {filteredProjects.map((project, index) => (
          <article 
            key={project.id} 
            className={`portfolio__item card ${project.featured ? 'featured' : ''}`}
            style={{ 
              animationDelay: isVisible ? `${index * 0.1}s` : '0s',
              animation: isVisible ? 'fadeInUp 0.6s ease forwards' : 'none'
            }}
          >
            <div className='portfolio__item-image'>
              <img src={project.image} alt={project.title} />
              <div className="portfolio__overlay">
                <div className="overlay-content">
                  <FaEye className="overlay-icon" />
                  <span>View Project</span>
                </div>
              </div>
            </div>

            <div className="portfolio__content">
              <h3>{project.title}</h3>
              <p className="portfolio__description">{project.description}</p>
              
              <div className="portfolio__technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech.icon}
                    <span>{tech.name}</span>
                  </span>
                ))}
              </div>

              <div className='portfolio__item-cta'>
                <a 
                  href={project.github} 
                  className='btn'
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source code`}
                >
                  <FaGithub /> Code
                </a>
                <a 
                  href={project.demo} 
                  className='btn btn-primary'
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} live demo`}
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>

            {project.featured && (
              <div className="featured-badge">
                <span>Featured</span>
              </div>
            )}
          </article>
        ))}
      </div>

      <div className="portfolio__cta">
        <a href="https://github.com/rishavpatel" className='btn btn-primary' target="_blank" rel="noopener noreferrer">
          <FaGithub /> View All Projects
        </a>
      </div>
    </section>
  )
}

export default Portfolio
