import React from 'react';
import './Wos.scss';
import backArrow from '../../assets/backArrow.png';

function Wos() {
  return (
    <div className="display wos">
        <div className="navbar">
        <img className="backArrow" src={backArrow} alt="backArrow" />
            <div className="btn">
                <button className="btn_text legal">Languages</button>
                <button className="btn_text">Live Chat</button>
            </div>
        </div>
        <div className="main_legal">
            <h1 className='title'>Wallet Terms of Service</h1>
            <h2>Last update: May 20, 2022</h2>
            <p>Jurrassic Holdings LTD makes available to users certain software services accessible via mobile device application, including the Jurrasic wallet (commonly known as DInosaur Land).</p>
            <p>Jurrasic Holdings developed these Terms of Service to describe the terms that govern you use of all versions of the Wallet application.</p>
            <p>AGREEMENT TO TERMS:</p>
            <p>By clicking “I Agree” I agree. If not you may not access or use the Services.</p>
        </div>
        <div className='wos_btn_section'>
            <button className='legal_btn purple .wosbtn'>I agree</button>
        </div>
    </div>
  );
}

export default Wos;