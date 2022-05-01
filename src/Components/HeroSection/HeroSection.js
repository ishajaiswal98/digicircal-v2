import React from 'react'

import './HeroSection.css'
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className='hero-container'>
   
  <p> </p>
  <div className="hero-btn">
  <button  className='btn btn-booking' eventKey={2}><Link to='/Book-online'>Contact us</Link> </button>
    </div>
    
    </div>
  )
}

export default HeroSection