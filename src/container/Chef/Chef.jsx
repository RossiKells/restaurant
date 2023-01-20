import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="" srcset="" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's word"/>
      <h1 className='headtext__cormorant'>
        What we belive in
      </h1>

      <div className='chef_content'>
        <div className="chef_content_quote">
          <img src={images.quote} alt="" srcset="" />
          <p className='p__opensans'>Cooking is an art, but it's also a science. And like any art or science, it requires passion, dedication, and a willingness to take risks. To truly excel as a chef, you must be willing to let go of your inhibitions and throw yourself into the process with abandon.</p>
        </div>

        <div className="chef_sign">
          <p className="p__opensans">Kevin leo</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="" srcset="" />
        </div>
      </div>
    </div>
    
  </div>
);

export default Chef;
