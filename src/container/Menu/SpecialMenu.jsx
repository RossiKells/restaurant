import React from 'react';
import { SubHeading,MenuItem } from '../../components';
import {images,data} from '../../constants'
import './SpecialMenu.css'

// import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__speicalMenu flex__center section__padding' id="menu">
    <div className="app_specialMenu-title">

    <SubHeading title='Menu that fits you palatte'/>
    <h1 className="headtext__cormorant">Today's special</h1>
    </div>

    <div className="speicalMenu-menu">
      <div className="drinks_list">
        <p className='p__cormorant'>Wine & Beer</p>
        <div className="wineListItems">
          
          {data.wines.map((wine,index)=>{
            return(
              <MenuItem key={index} title={wine.title} price={wine.price} tags={wine.tags}/>
            )
            
          })}
        </div>
       

      </div>

      <div className="menu_img">
          <img src={images.menu}alt="" srcset="" />
      </div>

      <div className="drinks_list">
        <p className='p__cormorant' >Cocktails</p>
        <div className="wineListItems">
          {data.cocktails.map((cocktails,index)=>{
            return(
              <MenuItem key={index} title={cocktails.title} price={cocktails.price} tags={cocktails.tags}/>
            )
            
          })}
        </div>
       

      </div>

    </div>
    <div className='btn_container'>
      <button className="btn">View more</button>
    </div>
  </div>

  
);

export default SpecialMenu;
