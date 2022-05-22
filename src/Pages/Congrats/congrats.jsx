import React from 'react';
import './congrats.scss';
import backArrow from '../../assets/backArrow.png';
import Moonmoon from '../../assets/moonmoon2.png';

function Congrats() {
  return (
    <div className="display wos">
        <div className="navbar">
        <img className="backArrow" src={backArrow} alt="backArrow" />
            <div className="btn">
                <button className="btn_text legal">Languages</button>
                <button className="btn_text">Live Chat</button>
            </div>
        </div>
        <div className="main_congrats">
            <div className="main_legal">
            <h1 className='title'>Congrats!! closer to your wallet</h1>
            </div>
            <img src={Moonmoon} className="robot-img" />
        </div>
        <div className='legal_btns'>
        <button className='legal_btn purple'>Let's do it!</button>
        </div>
    </div>
  );
}

export default Congrats;