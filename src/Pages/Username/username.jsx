import React from 'react';
import './username.scss';
import backArrow from '../../assets/backArrow.png';
import Moonmoon from '../../assets/moonmoon2.png';

function Username() {
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
            <h1>Pick your username</h1>
            <p>How do you want other Wallet users to find you and send you payments? They might be your besties or collectors you don’t know. Choose wisely.</p>
        </div>
        <div>
            <div className='scnd-section'>
            <h2>Username</h2>
        <input type="text" className="username" placeholder="@username" />
        <img src={Moonmoon} alt="moonmoon-img" className="moon-username" />
            </div>
        </div>
        <div className='legal_btns'>
            <button className='legal_btn purple'>I chose a username</button>
        </div>
    </div>
  );
}

export default Username;