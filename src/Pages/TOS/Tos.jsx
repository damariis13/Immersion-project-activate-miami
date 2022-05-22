import React from 'react';
import './Tos.scss';
import backArrow from '../../assets/backArrow.png';
import checkMark from '../../assets/checkMark.png';

function Tos() {
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
            <p>Please review the Wallet Privacy Policy and Terms of Service</p>
        </div>
        <div className='legal_btns'>
            <img className='checkMark' src={checkMark} alt="checkMark" />
            <button className='legal_btn white'>Terms of Service</button>
            <button className='legal_btn white'>Privacy Policy</button>
            <button className='legal_btn purple'>ACCEPT</button>
        </div>
    </div>
  );
}

export default Tos;