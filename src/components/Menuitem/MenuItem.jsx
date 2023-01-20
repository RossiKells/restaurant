import React from 'react';

import './MenuItem.css';

const MenuItem = ({title,price,tags}) => (
  <div className='menu_items'>
    <div className="head">
      <div className="name">
        <p className='p__cormorant' style={{color:"#DCCA87"}}>{title}</p>
      </div>
      <div className="dash"></div>

      <div className="price">
        <p className='p__cormorant' style={{color:"#DCCA87"}}>{price}</p>
      </div>

    </div>
      <div className="tags">
        <p className='p__cormorant'>{tags}</p>
      </div>
    
  </div>
);

export default MenuItem;
