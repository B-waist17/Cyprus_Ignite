import React from 'react'
import './about.css'
import aboutImage from '../../resources/about-image.png'
import mapIcon from '../../resources/map-location.svg'
import calendar from '../../resources/calendar-linear.svg'
import clock from '../../resources/clock.svg'

const About = () => {
  return (
    <div className='aboutMain'>
      <h2>About this Event</h2>
        <div className='aboutContent'>
          <div><img src={aboutImage} alt='A group of people'/></div>
          <div className='aboutText'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type 
              specimen book. It has survived not only five centuries.</p>
              <div className='location'>
                <img src={mapIcon} alt='map'/>
                <p>Zena Palace Theatre, 18,Theofanous theodotou
                  1065, behind istorm shop, Nicosia</p>
              </div>
              <div className='time'>
                <span className='calendar'><img src={calendar} alt='calendar'/><p>1 - 2 November, 2024</p></span>
                <span className='calendar'><img src={clock} alt='clock'/><p>5pm Daily. 10am Saturday</p></span>
              </div>

          </div>
          
        </div>
    </div>
  )
}

export default About
