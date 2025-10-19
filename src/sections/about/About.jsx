import React from 'react'
import './about.css'
import aboutImage from '../../resources/cyprusignite2025.jpeg'
import mapIcon from '../../resources/map-location.svg'
import calendar from '../../resources/calendar-linear.svg'
import clock from '../../resources/clock.svg'

const About = () => {
  return (
    <div className='aboutMain' id='about'>
      <h2>About this Event</h2>
        <div className='aboutContent'>
          <div className='aboutImg'></div>
          <div className='aboutText'>
            <p><b>Welcome to Cyprus Ignite Conference</b> <br />
              Cyprus Ignite is an annual Christian awakening conference that began in 2024 with a bold vision: to see the nation of Cyprus set ablaze for Jesus. It is a powerful gathering 
              where believers, pastors, and church leaders unite in worship, praise, intercession, and the Word of God. It is a call to see revival break out across the island.
              <br /><br />
              From its inception, Cyprus Ignite has been marked by the tangible presence of God. At Cyprus Ignite 2024, we witnessed a mighty move of the Holy Spirit with evident miracles, 
              healings, and powerful testimonies of transformation. It was more than a conference, it was an encounter with God. <br /><br />
              This Year’s Theme:
              <b>“Christ in you, the hope of glory.”</b> (Colossians 1:27)


            </p>
              <div className='location'>
                <img src={mapIcon} alt='map'/>
                <p>Zena Palace Theatre, 18,Theofanous theodotou
                  1065, behind istorm shop, Nicosia, Cyprus.</p>
              </div>
              <div className='time'>
                <span className='calendar'><img src={calendar} alt='calendar'/><p>7 - 8 November, 2025</p></span>
                <span className='calendar'><img src={clock} alt='clock'/><p>5:00 pm EET (GMT +3) </p></span>
              </div>

          </div>
          
        </div>
    </div>
  )
}

export default About
