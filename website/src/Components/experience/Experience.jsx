import React from 'react'
import "./experience.css"
import {BsPatchCheckFill} from "react-icons/bs"
const Experience = () => {
  return (
    <section id='experience'>
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>
{/* /*--------Frontend Development--------- */}
    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
           <article className="experience__details">
            <BsPatchCheckFill/>
             <div>
              <h4>HTML</h4>
            <small className='text-light'>experienced</small>
            </div>
           </article>
           <article className="experience__details">
            <BsPatchCheckFill/>
             <div>
             <h4>CSS</h4>
            <small className='text-light'>experienced</small>
             </div>
           </article>
           <article className="experience__details">
            <BsPatchCheckFill/>
             <div>
             <h4>JavaScript</h4>
            <small className='text-light'>experienced</small>
             </div>
           </article>
           <article className="experience__details">
            <BsPatchCheckFill/>
             <div>
             <h4>React js</h4>
            <small className='text-light'>experienced</small>
             </div>
           </article>
           <article className="experience__details">
            <BsPatchCheckFill/>
            <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>experienced</small>
            </div>
           </article>
        </div>
      </div>
      {/* --------------Backend Development--------------- */}
      <div className="experience__backend">
      <h3>Backend Development</h3>
        <div className="experience__content">
           <article className="experience__details">
            <BsPatchCheckFill/>
             <div>
             <h4>java</h4>
            <small className='text-light'>experienced</small>
             </div>
           </article>
           <article className="experience__details">
            <BsPatchCheckFill/>
             <div>
             <h4>Hibernate</h4>
            <small className='text-light'>Inetmediate</small>
             </div>
           </article>
           <article className="experience__details">
            <BsPatchCheckFill/>
             <div>
             <h4>MySQL</h4>
            <small className='text-light'>Basic</small>
             </div>
           </article>
           <article className="experience__details">
            <BsPatchCheckFill/>
             <div>
             <h4>Spring</h4>
            <small className='text-light'> Intermediat</small>
             </div>
           </article>
           <article className="experience__details">
            <BsPatchCheckFill/>
             <div>
             <h4> Servlet</h4>
            <small className='text-light'>experienced</small>
             </div>
           </article>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Experience
