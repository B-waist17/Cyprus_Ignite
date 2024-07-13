import React from 'react'
import './hero.css'
import Nav from '../navigation/Nav'

const Hero = () => {
  return (
    <div className='heroMain'>
      <Nav />
      <div className='heroContent'>
        <p>The ancient land of Cyprus must be ignited.... The fire must fall!</p>
        <h1>THE TRANSFORMING FIRE CONFERENCE 2024</h1>
        <div className='heroCTA'>
            <button className='heroBtn' onClick={() => window.open('https://form.jotform.com/241924592539466')}>Register</button>
            <button className='heroBtn1' onClick={() => window.open('https://form.jotform.com/241924262657461')}>VOLUNTEER</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
