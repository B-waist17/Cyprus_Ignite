import React, { useState } from 'react'
import PayPal from '../../resources/paypalImg.png'
import './modal.css'

const Modal = ({ open, onClose, children}) => {

    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

  return (
    <>
    <div onClick={handleOpenModal}>{children}</div>
    { openModal &&
        <div className='overlay' onClick={onClose} >
        <div className='modalContainer' onClick={(e) => e.stopPropagation()}>
          <button className='close-button' onClick={handleCloseModal}>X</button>
          <div className='paypal'>
              <h3>Use PayPal</h3>
              <div className='paypalContent'>
               <img src={PayPal} alt="" />
               <button className='btn' onClick={() => window.open('https://paypal.me/cyprusignitecon')}>Go to PayPal</button>
              </div>
              
          </div>
          <div className='paypalText'>
              <h3>Bank Transfer</h3>
              <p>
                  Account No.: 357029122720 <br />
                  Account Name: Eseoghene Christopher Akhabue. <br />
                  Swift code BCYPCY2N <br />
                  IBAN: CY44002001950000357029122720. <br />
                  Bank Of Cyprus. <br />
                  Kyriacou matsi, 50, Agios demetios, 2368, Engomi
              </p>
          </div>
        </div>
      </div>
    }
    
    </>
  )
}

export default Modal
