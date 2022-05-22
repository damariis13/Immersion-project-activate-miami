import React from 'react';
import './Connect.scss'
import Btn from '../../components/Button/button';
import robot from '../../assets/robot-moonmoon.png';

function Navbar() {
  return (
    <div className="display">
      <div className="navbar">
          <Btn text="Languages" />
          <Btn text="Live Chat" />
          <Btn text="MoonMoon" />
      </div>
      <div className='main'>
      <h1 className='main_text'>
          MoonMoon can walk you on your new wallet journey
      </h1>
      <div className='main_robot'>
          <img src={robot} alt="robot" />
      </div>
      </div>
      <div className='legal_btns'>
        <button className='legal_btn purple'>Create a new wallet</button>
        <button className='legal_btn white'>I already have a wallet</button>
      </div>
      
    </div>
    
  );
}

export default Navbar;
