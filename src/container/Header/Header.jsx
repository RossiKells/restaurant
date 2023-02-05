import {React,useState} from 'react';
import Signup from '../Signup/Signup'

import './Header.css';
import images from '../../constants/images';
import { SubHeading } from '../../components';


const Header = () => {
  

  return(

  <>
  <div className='main'>
    <Signup/>
  </div>
  <div className='app__header app__wrapper section__padding' id="home">
    
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The key to Fine Dining</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>Welcome to Gericht, where we serve delicious, fresh, and authentic food that will satisfy your cravings. Our menu features a wide variety of dishes to choose from, including classic favorites, as well as new and exciting options.</p>
      <button className='custom_button'>Explore Now</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="" srcset="" className='wrapper__img' />
    </div>
  </div>
  </>
)};

export default Header;
