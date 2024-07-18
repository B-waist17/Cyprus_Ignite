import React from 'react'
import './ministers.css'
import orokpor from '../../resources/a oropor 1.png'
import ebuka from '../../resources/ebuka-songs-wfuhw.jpeg'
import olga from '../../resources/olga_now.png'
import eseoghene from '../../resources/eseoghene.png'
import rennet from '../../resources/Rennet Premnath-2.png'
import lukas from '../../resources/lukas.png'

const Ministers = () => {
  return (
    <div className='ministersMain'>
      <div className='leadMinisters'>
      <div className='minister'>
        <img src={eseoghene} alt="ese" />
        <div className='ministerText'>
            <h3>Pst. Christopher Akhabue</h3>
            <p>Host Pastor</p>
        </div>
      </div>
      <div className='minister'>
        <img src={orokpor} alt="orokpor" />
        <div className='ministerText'>
            <h3>Apostle Micheal Orokpor</h3>
            <p>Guest Speaker</p>
        </div>
      </div>
      </div>
      <div className='otherMinisters'>
      <div className='minister'>
        <img src={rennet} alt="rennet" />
        <div className='ministerText'>
            <h3>Pst. Rennet Premath</h3>
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
      <div className='minister'>
        <img src={olga} alt="olga" />
        <div className='ministerText'>
            <h3>Olga ksant Gopoulou</h3>
            <p>Guest Artiste</p>
        </div>
      </div>
      <div className='minister'>
        <img src={lukas} alt="lukas" />
        <div className='ministerText'>
            <h3>Evang. Lukas Rauffer</h3>
            <p>Guest Speaker</p>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Ministers
