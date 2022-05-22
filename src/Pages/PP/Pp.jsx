import React from 'react';
import './Pp.scss';
import backArrow from '../../assets/backArrow.png';
import checkMark from '../../assets/checkMark.png';

function Pp() {
  return (
    <div className="display">
        <div className="navbar">
        <img className="backArrow" src={backArrow} alt="backArrow" />
            <div className="btn">
                <button className="btn_text legal">Languages</button>
                <button className="btn_text">Live Chat</button>
            </div>
        </div>
        <div className="main_legal">
            <h1>Legal</h1>
            <p>Please review our Privacy Policy before clicking accept.</p>
            <p>...</p>
        </div>
        <div className='legal_btns'>
            <img className='checkMark pp' src={checkMark} alt="checkMark" />
            <button className='legal_btn purple'>ACCEPT</button>
        </div>
    </div>
  );
}

export default Pp;