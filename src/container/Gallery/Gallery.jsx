import React from 'react';
import { BsInstagram,BsArrowLeftShort,BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';

import {images} from '../../constants'

import './Gallery.css';
const gallery=[images.gallery01,images.gallery02,images.gallery03,images.gallery04]

const Gallery = () => {
  

  const scrollRef=React.useRef(null);

  const scroll=(direction)=>{
    const {current}=scrollRef;
    if (direction === 'left'){
      current.scrollLeft -= 300;
    }
    else{
      current.scrollLeft += 300;
    }
  }
  return(
  <div className='app__gallery flex__center'>
    <div className="app__gallery-content">
      <div className="text_info">

     
      <SubHeading title="Instagram"/>
      <h1 className='headtext__cormorant'>Photo Gallery</h1>
      <p className="p__opensans" style={{color:"#AAA",marginTop:"2rem"}}>The purpose of a restaurant photo gallery is to give potential customers an idea of what to expect when they visit the restaurant and to entice them to make a reservation.</p>
      <button type='button' className='custom__button'>View More</button>
      </div>

      <div className="app__gallery-images">
        
        <div className="img__container" ref={scrollRef}>
          {
            gallery.map((images,index)=>{
              return(
              <div className="app__gallery-images_card flex__center" key={index}>
                <img src={images} alt="" srcset="" />
              </div>)

            })
          }
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className='gallery__image-icon' onClick={()=>scroll('left')}/>
          <BsArrowRightShort className='gallery__image-icon' onClick={()=>scroll('right')}/>
        </div>
      </div>
    </div>
    
  </div>)
};

export default Gallery;
