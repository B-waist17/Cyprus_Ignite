import React from 'react'
import './ministers.css'
import gordon from '../../resources/apst. Gordon-crop.png'
import loannou from '../../resources/min. andrew-crop.png'
import olga from '../../resources/pst. olga-crop.png'
import eseoghene from '../../resources/apst, ese-crop.png'
import averkios from '../../resources/averlios ^ helen-crop.png'
import queen from '../../resources/min. queen-crop.png'
import andrew from '../../resources/pst. k-crop.png'
import nichos from '../../resources/pst. nikos-crop.png'
import nathan from '../../resources/min. nathan-crop.png'

const Ministers = () => {
  return (
    <div className='ministersMain'>
      <div className='leadMinisters'>
      <div className='minister'>
        <img src={eseoghene} alt="ese" />
        <div className='ministerText'>
            <h3>Apst. Eseoghene Christopher</h3>
            <p>Akhabue</p>
        </div>
      </div>
      <div className='minister'>
        <img src={gordon} alt="orokpor" />
        <div className='ministerText'>
            <h3>Apostle Gordon-John</h3>
            <p>Manchie</p>
        </div>
      </div>
      <div className='minister'>
        <img src={andrew} alt="isaac" />
        <div className='ministerText'>
            <h3>Pastor Andrew K.</h3>
            <p>Guest Speaker</p>
        </div>
      </div>
      <div className='minister'>
        <img src={nichos} alt="isaac" />
        <div className='ministerText'>
            <h3>Pastor Nichos</h3>
            <p>Santos</p>
        </div>
      </div>
      </div>
      <div className='otherMinisters'>
      <div className='minister'>
        <img src={averkios} alt="rennet" />
        <div className='ministerText'>
            <h3>Averkios and Helen</h3>
            <p>Averkiou</p>
        </div>
      </div>
      <div className='minister'>
        <img src={loannou} alt="ebuka" />
        <div className='ministerText'>
            <h3>Minister Andrew</h3>
            <p>Loannou</p>
        </div>
      </div>
      <div className='minister'>
        <img src={olga} alt="olga" />
        <div className='ministerText'>
            <h3> Minister Olga</h3>
            <p>Ksanthopoulou</p>
        </div>
      </div>
      <div className='minister'>
        <img src={queen} alt="lukas" />
        <div className='ministerText'>
            <h3>Minister Queen</h3>
            <p>Judith</p>
        </div>
      </div>
      <div className='minister'>
        <img src={nathan} alt="lukas" />
        <div className='ministerText'>
            <h3>Minister Nathan</h3>
            <p>Ngoma</p>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Ministers
