import React from 'react';
import './button.scss';

function Button(props) {

  return (
    <div className="btn">
        <h1 className='btn_text'>{props.text}</h1>
    </div>
  );
}

export default Button;