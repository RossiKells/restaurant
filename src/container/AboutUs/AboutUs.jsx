import React from 'react';
import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id="about">
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="" srcset="" />


    </div>
    <div className="app__aboutus-content flex__center">
      <div className='app__aboutus-content-about'>
        <h1 className='headtext__comorant'>About us</h1>
        <img src={images.spoon} alt="" srcset="" />
        <p className='p__opensans'>We are a family-owned business dedicated to providing delicious and authentic cuisine in a warm and inviting atmosphere. Our menu features a variety of dishes made with fresh and locally-sourced ingredients.</p>
        <button type="button" className='custom__button'>Know more</button>
      </div>
    <div className="app__aboutus-content_knife flex__center">
      <img src={images.knife} alt="" srcset="" />
    </div>
    <div className='app__aboutus-content-history'>
      <h1 className='headtext__comorant'>Our history</h1>
      <img src={images.spoon} alt="" srcset="" />
      <p className='p__opensans'>We are a family-owned business dedicated to providing delicious and authentic cuisine in a warm and inviting atmosphere. Our menu features a variety of dishes made with fresh and locally-sourced ingredients.</p>
      <button type="button" className='custom__button'>Know more</button>
    </div>
    </div>


  </div>
);

export default AboutUs;
