import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import './HeroSection.css'
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className='hero-container'>
    <span style={{color: 'white',textShadow: '5px -1px 2px rgba(0,0,0,0.9)',}}>
        <Typewriter 
        loop
        cursor
        cursorStyle="_"
        typeSpeed={20}
        deleteSpeed={50}
        words={['WELCOME TO' ,'. D I G I  C I R C A L']}
        />
        </span>
  <p> </p>
  <div className="hero-btn">
  <button  className='btn btn-booking' eventKey={2}><Link to='/Book-online'>Contact us</Link> </button>
    </div>
    
    </div>
  )
}

export default HeroSection