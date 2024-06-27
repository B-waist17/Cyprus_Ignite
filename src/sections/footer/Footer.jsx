import React from 'react'
import './footer.css'
import blackLogo from '../../resources/cicblacklogo.png'

const Footer = () => {
  return (
    <div className="footerMain">
      <div className='footerLogo'>
        <img src={blackLogo} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam</p>
      </div>
      <div>
        <h4>Quick Links</h4>
        <p>About</p>
        <p>Speakers</p>
        <p>Sponsors</p>
        <p>Contact</p>
      </div>
      <div>
        <h4>Follow Us</h4>
        <p>Twitter</p>
        <p>Facebook</p>
        <p>Instagram</p>
      </div>
    </div>
  )
}

export default Footer
