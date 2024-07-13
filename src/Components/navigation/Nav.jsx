import React from 'react'
import './nav.css'
import whiteLogo from '../../resources/cicwhitelogo.png'
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import { useState } from 'react'


const Menu = () => (
  <>
  <p>Home</p>
  <p>About</p>
  <p>Ministers</p>
  <p>Join Us</p>
  <p>Sponsors</p>
  <p>Contact Us</p>
  </>
)

const Nav = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='navMain'>
    <div className='navContent'>
      <img src={whiteLogo} alt="" />
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
                <button className='navMenuCTA'>Volunteer</button>
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
