import React from 'react'
import './footer.css'
import blackLogo from '../../resources/cicblacklogo.png'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <div className="footerMain">
      <div className='footerLogo'>
        <img src={blackLogo} alt="" />
        <p>The ancient land of Cyprus must be ignited.... The fire must fall!</p>
      </div>
      <div className='footerList'>
        <h4>Quick Links</h4>
        <li><Link to="hero" spy={true} smooth={true} offset={-100} duration={500} className='navLink'>Home</Link></li>
        <li><Link to="about" spy={true} smooth={true} offset={-100} duration={500} className='navLink'>About</Link></li>
        <li><Link to="ministers" spy={true} smooth={true} offset={-100} duration={500} className='navLink'>Ministers</Link></li>
        <li><Link to="join" spy={true} smooth={true} offset={-100} duration={500} className='navLink'>Join Us</Link></li>
        <li><Link to="sponsors" spy={true} smooth={true} offset={-100} duration={500} className='navLink'>Sponsors</Link></li>
        <li><Link to="contact" spy={true} smooth={true} offset={-100} duration={500} className='navLink'>Contact Us</Link></li>
      </div>
      <div className='footerList'>
        <h4>Follow Us</h4>
        <p>Twitter</p>
        <p>Facebook</p>
        <p>Instagram</p>
      </div>
    </div>
  )
}

export default Footer
