import React from 'react';
import Btn from '../Button/button';
import './nav.scss';

function Navbar() {
  return (
    <div className="navbar">
        <Btn text="Languages" />
        <Btn text="Live Chat" />
        <Btn text="MoonMoon" />
    </div>
  );
}

export default Navbar;