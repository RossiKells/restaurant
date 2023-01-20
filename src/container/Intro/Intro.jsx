import React from 'react';
import {BsPauseFill, BsPlayFill} from 'react-icons/bs'
import {meal} from '../../constants'

import './Intro.css';

const Intro = () => {
  const [play,setPlay]=React.useState(false);
  const vidRef=React.useRef();
  const handleVideo=()=>{
    
    if (play){
      vidRef.current.pause()
      setPlay(false);
    }
    else{

      vidRef.current.play()
      setPlay(true);
    }
    

  }
  return(
  <div className='app__video'>
    <video src={meal} type="video/mp4" ref={vidRef} loop controls={false} muted/>
    <div className="app__video-overlay flex__center">
      <div className="video-overlay__circle flex__center" onClick={handleVideo}>
        {play?(<BsPauseFill color='#fff' fontSize={30}/>):(<BsPlayFill color='#fff' fontSize={30}/>)}
      </div>
    </div>

  </div>)
};

export default Intro;
