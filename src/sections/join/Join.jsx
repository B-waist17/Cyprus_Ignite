import React, { useState} from 'react'
import './join.css'
import Modal from '../../Components/paymentModal/Modal';

const Join = () => {
  
  


  // explore react portals

  return (
    <>
    <div className='joinMain' id='join'>
      <div className='joinContent'>
        <h3>Become a Volunteer</h3>
        <p>Interested in volunteering at the Transforming Fire Conference? Here comes a great 
          opportunity for you to serve the Lord as we have a variety of volunteer opportunities, 
          click to see the area of where you can serve. 
        </p>
        <button className='joinBtn' onClick={() => window.open('https://form.jotform.com/241924262657461')}>Volunteer</button>
      </div>
      <div className='joinContent'>
        <h3>Become a Donor/Sponsor</h3>
        <p>Your support will keep God's vision for this conference alive as God loves a cheerful giver (2 Cor 9:2)
        </p>
      <Modal>
        <button className='joinBtn'>Donate</button>
      </Modal>
      </div>
    </div>
      </>
  )
}

export default Join
