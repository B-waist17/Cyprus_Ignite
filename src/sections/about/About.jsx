import React from 'react'
import './about.css'
import aboutImage from '../../resources/cicPpster.jpeg'
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
            <p>The Transforming fire conference is an annual gathering, where believers come together to worship, 
              praise, pray and get ignited as enabled by God's word by the Help of the Holy Spirit (Acts 2:1-4) <br />
              By the special grace of God, this year's  conference tagged: <b>CYPRUS IGNITE 2024</b>, 
              is aimed at igniting the fire of the Holy Spirit in the lives of Christian believers as it was in the days of the early church. <br />
              It is our belief and hope that as the fire of the Holy Spirit is ignited, there shall be mighty manifestations of His great grace and power (Acts 4:33) 
              that will make the word of God grow mightily and prevail (Acts 19:20) with miracles, wonders and signs in the land and thus prompt the take over of Cyprus for Jesus Christ.

            </p>
              <div className='location'>
                <img src={mapIcon} alt='map'/>
                <p>Zena Palace Theatre, 18,Theofanous theodotou
                  1065, behind istorm shop, Nicosia, Cyprus.</p>
              </div>
              <div className='time'>
                <span className='calendar'><img src={calendar} alt='calendar'/><p>1 - 2 November, 2024</p></span>
                <span className='calendar'><img src={clock} alt='clock'/><p>5:00 pm EET (GMT +3) </p></span>
              </div>

          </div>
          
        </div>
    </div>
  )
}

export default About
