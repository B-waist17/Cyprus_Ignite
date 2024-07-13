import React from 'react'
import './join.css'
const Join = () => {
  return (
    <div className='joinMain'>
      <div className='joinContent'>
        <h3>Become a Volunteer</h3>
        <p>Interested in volunteering at the Transforming Fire Conference? Here comes a great 
          opportunity for you to serve the Lord as we have a variety of volunteer opportunities, 
          click to see the area of where you can serve. 
        </p>
        <button className='joinBtn'>Volunteer</button>
      </div>
      <div className='joinContent'>
        <h3>Become a Donor/Sponsor</h3>
        <p>Your support will keep God's vision for this conference alive as God loves a cheerful giver (2 Cor 9:2)
        </p>
        <button className='joinBtn'>Donate</button>
      </div>
    </div>
  )
}

export default Join
