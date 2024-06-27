import React from 'react'
import './ministers.css'
import orokpor from '../../resources/micheal orokpor.webp'
import ebuka from '../../resources/ebuka-songs-wfuhw.jpeg'

const Ministers = () => {
  return (
    <div className='ministersMain'>
      <div className='minister'>
        <img src={orokpor} alt="orokpor" />
        <div className='ministerText'>
            <h3>Apostle Micheal Orokpor</h3>
            <p>Guest Speaker</p>
        </div>
      </div>
      <div className='minister'>
        <img src={ebuka} alt="ebuka" />
        <div className='ministerText'>
            <h3>Ebuka Songs</h3>
            <p>Guest Artiste</p>
        </div>
      </div>
    </div>
  )
}

export default Ministers
