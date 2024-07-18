import React from 'react'
import './nav.css'
import whiteLogo from '../../resources/cicwhitelogo.png'
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import { useState } from 'react'
import {Link} from 'react-scroll'


const Menu = () => (
  <>
  <Link to="hero" spy={true} smooth={true} offset={-100} duration={500} className='navLink'>Home</Link>
  <Link to="about" spy={true} smooth={true} offset={-100} duration={500} className='navLink'>About</Link>
  <Link to="ministers" spy={true} smooth={true} offset={-100} duration={500} className='navLink'>Ministers</Link>
  <Link to="join" spy={true} smooth={true} offset={-100} duration={500} className='navLink'>Join Us</Link>
  <Link to="sponsors" spy={true} smooth={true} offset={-100} duration={500} className='navLink'>Sponsors</Link>
  <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} className='navLink'>Contact Us</Link>
  </>
)

const Nav = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='navMain'>
    <div className='navContent'>
      <Link to="hero" spy={true} smooth={true} offset={-100} duration={500} className='navLink'><img src={whiteLogo} alt="" /></Link>
      <div className='navContentLinks'>
        <Menu />
      </div>
      <button className='navCTA'>Donate</button>
      <div className='navMenu'>
        {
          toggleMenu 
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false) } />
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {
          toggleMenu && (
            <div className='navMenuContainer scale-up-center'>
              <div className='navMenuContainerLinks'>
                < Menu />
                <button className='navMenuCTA'>Donate</button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  </div>




   /* <div className="navMain">
      <div className='navLogo'><img src={whiteLogo} alt="" /></div>
      <div className='navMenu'>
        <span>Home</span>
        <span>About</span>
        <span>Ministers</span>
        <span>Join Us</span>
        <span>Sponsors</span>
        <span>Contact Us</span>
      </div>
      <div className='navCTA'><button>Volunteer</button></div>
    </div> */
  )
}

export default Nav
