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
              At the heart of Cyprus Ignite is a deep burden for the land. Pastors and leaders join forces in prayer, standing in agreement for the spiritual awakening and healing of Cyprus. 
              Together, we declare: Cyprus is for Jesus — and He is taking over the land. <br />

              This Year’s Theme:
              <b>“Christ in you, the hope of glory.”</b> (Colossians 1:27)


            </p>
              <div className='location'>
                <img src={mapIcon} alt='map'/>
                <p>Russian cultural centre (Theatre) 16, Alasias Street, 
                  off John Kennedy avenue, Nicosia 1075, Cyprus</p>
              </div>
              <div className='time'>
                <span className='calendar'><img src={calendar} alt='calendar'/><p>7 - 8 November, 2025</p></span>
                <span className='calendar'><img src={clock} alt='clock'/><p>5:00 pm EET (GMT +3) </p></span>
              </div>

          </div>
          
        </div>
        <div className='whyAttend'>
        
          <h2>Why Attend?</h2>
          <p>
          Powerful worship that ushers in God’s presence, 

          Anointed teaching and preaching from seasoned ministers, 

          United prayer for the nation of Cyprus, 

          A space to be refreshed, equipped, and ignited,

          A move of God with signs, wonders, and miracles. <br />

          <b>Don’t miss what God is doing this year. Come expectant. Come hungry. Come ready to be ignited.</b>

        </p>
        </div>
        
    </div>
  )
}

export default About
