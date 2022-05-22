import React from 'react';
import './footer.scss';

function Footer(props) {

  return (
    <div className="footer">
        <button className="footer_create">Create a new wallet</button>
        <button className="footer_wallet">I already have a wallet</button>
    </div>
  );
}

export default Footer;