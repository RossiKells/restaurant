import {React,useState} from 'react';

import { AboutUs, Chef, FindUs, Footer,  Header, Intro, Laurels, SpecialMenu, } from './container';
import { Navbar } from './components';

import './App.css';
import Signup from './container/Signup/Signup';

const App = () => {
  const [signup,setSignup]=useState(false);
  const fromNavbar=(params)=>{
    setSignup(params);
    console.log(params);
    
  }
  

  return (
  <div>
    <Navbar data={fromNavbar} />
    <Header  />
    <Signup signup={signup}/>
    
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    {/* <Gallery /> */}
    <FindUs />
    <Footer />
  </div>
)};

export default App;
