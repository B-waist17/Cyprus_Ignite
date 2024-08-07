import React from 'react'
import './hero.css'
import Nav from '../navigation/Nav'

const Hero = () => {
  return (
    <div className='heroMain' id='hero'>
      <Nav />
      <div className='heroContent'>
        <p>The ancient land of Cyprus must be ignited.... The Holy Ghost fire must fall!</p>
        <h1>THE TRANSFORMING FIRE CONFERENCE 2024</h1>
        <p>Let's pray for CYPRUS and EUROPE</p>
        <div className='heroCTA'>
            <button className='heroBtn' onClick={() => window.open('https://form.jotform.com/241924592539466')}>Register to Attend</button>
            <button className='heroBtn1' onClick={() => window.open('https://form.jotform.com/241924262657461')}>Volunteer</button>
            <button className='heroBtn2' onClick={() => window.open('https://form.jotform.com/242133577426457')}>Prayer Request</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
