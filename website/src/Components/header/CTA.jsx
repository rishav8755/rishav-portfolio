import React from 'react'
import Bhanu from "../../photo/RISHAV.pdf"
const CTA = () => {
  return (
    <div>
      <div className="cta">
        <a href={Bhanu} className="btn">Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
  )
}

export default CTA
