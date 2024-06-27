import React from 'react'
import './hero.css'
import Nav from '../navigation/Nav'

const Hero = () => {
  return (
    <div className='heroMain'>
      <Nav />
      <div className='heroContent'>
        <p>Transforming fire Presents</p>
        <h1>CYPRUS IGNITE CONFERENCE</h1>
        <div className='heroCTA'>
            <button className='heroBtn'>Register</button>
            <button className='heroBtn1'>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
