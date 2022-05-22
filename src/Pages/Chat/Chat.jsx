import React from 'react';
import './Chat.scss';
import Navbar from '../../components/Nav/nav';
import Profilepic from '../../assets/pfp.png';

function Livechat() {
    return (
      <div className='display'>
        <Navbar />
        <div className='main'>
            <span className='pfp_name'>B</span>
            <input className='pfp_input' type="text"
            placeholder="Live Chat"></input>
            <div className='main_robot pfp'>
                <img src={Profilepic} alt="robot" />
            </div>
        </div>
        <footer className="livechat_footer"></footer>
      </div>
    );
  }
  
  export default Livechat;
