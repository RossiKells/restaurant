import {React,useState}  from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import images from '../../constants/images'

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu,setToggleMenu] =useState(false);
   return(
    
   
  <nav className='app__Navbar'>
    <div className="app__Navbar-logo">
      <img src={images.gericht} alt="" srcset="" />

    </div>
    <ul className="app__Navbar-links">
      <li className="p__opensans"><a href="#home">Home</a></li>
      <li className="p__opensans"><a href="#about">About</a></li>
      <li className="p__opensans"><a href="#menu">Menu</a></li>
      <li className="p__opensans"><a href="#award">Award</a></li>
      <li className="p__opensans"><a href="#contact">Contact</a></li>
    </ul>

    <div className="app__navbar-login">
      <a href="#login" className="p__opensans">Login /  Register</a>
      <div />
      <a href="/" className='p__opensans'>Book Table</a>
    </div>

    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu fontSize={27} color="#fff" onClick={() => {setToggleMenu(true) }} />
      {toggleMenu&&(
      <div className='app__navbar-smallscreen-overlay flex__center slide-bottom'>
        <MdOutlineRestaurantMenu fontSize={27} className='overlay_close' onClick={()=>{setToggleMenu(false)}} />
        <ul className="app__Navbar-smallscreen-links">
          <li className="p__opensans"><a href="#home">Home</a></li>
          <li className="p__opensans"><a href="#about">About</a></li>
          <li className="p__opensans"><a href="#menu">Menu</a></li>
          <li className="p__opensans"><a href="#award">Award</a></li>
          <li className="p__opensans"><a href="#contact">Contact</a></li>
        </ul>
      </div>)}
    </div>

  </nav>


)};

export default Navbar;
