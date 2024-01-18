import React from 'react'
import "./portfolio.css"
import IMG1 from "../../photo/calulator.png"
import IMG2 from "../../photo/food.png"
import IMG3 from "../../photo/travel.png"
import IMG4 from "../../photo/clock.png"
import IMG5 from "../../photo/portfolio5.png"
import IMG6 from "../../photo/portfolio6.jpg"
const Portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Protfolio</h2>

    <div className="container portfolio__container">

      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
         <img src={IMG1} alt="" className='calculator' />
        </div>
        <h3>Calculater</h3>
         <div className='portfolio__item-cta'>
         <a href="https://github.com" className='btn' target="_blank">github</a>
        <a href="https://dribbble.com/alien_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
         </div>
      </article>

      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
         <img src={IMG2} alt="" className='food' />
        </div>
        <h3> Food Ordering System</h3>
         <div className='portfolio__item-cta'>
         <a href="https://github.com" className='btn' target="_blank">github</a>
        <a href="https://dribbble.com/alien_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
         </div>
      </article>

      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
         <img src={IMG3} alt="" className='travel' />
        </div>
        <h3>Tour and travel Ajency</h3>
         <div className='portfolio__item-cta'>
         <a href="https://github.com" className='btn' target="_blank">github</a>
        <a href="https://dribbble.com/alien_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
         </div>
      </article>

      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
         <img src={IMG4} alt="" className='clock' />
        </div>
        <h3>clock</h3>
         <div className='portfolio__item-cta'>
         <a href="https://github.com" className='btn' target="_blank">github</a>
        <a href="https://dribbble.com/alien_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
         </div>
      </article>
      

      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
         <img src={IMG5} alt="" />
        </div>
        <h3>This is a portfolio itme titel</h3>
         <div className='portfolio__item-cta'>
         <a href="https://github.com" className='btn' target="_blank">github</a>
        <a href="https://dribbble.com/alien_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
         </div>
      </article>

      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
         <img src={IMG6} alt="" />
        </div>
        <h3>This is a portfolio itme titel</h3>
        <div className='portfolio__item-cta'>
        <a href="https://github.com" className='btn' target="_blank">github</a>
        <a href="https://dribbble.com/alien_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
        </div>
      </article>
    </div>
    </section>
  )
}

export default Portfolio
