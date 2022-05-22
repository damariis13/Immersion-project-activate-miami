import React from 'react';
import './main.scss';
import robot from '../../assets/robot-moonmoon.png';

function Main() {

  return (
    <div className='main'>
        <h1 className='main_text'>
            MoonMoon can walk you on your new wallet journey
        </h1>
        <div className='main_robot'>
            <img src={robot} alt="robot" />
        </div>
    </div>
  );
}

export default Main;