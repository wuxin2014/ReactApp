import React from 'react';
import './header.css';

const Header = ({title, leftIcon, rightIcon, rightText, rightHandle, leftHandle}) => {
  return (
    <header id="header">
      <img src={leftIcon} onClick={leftHandle} />
      <h2>{title}</h2>
      {
        rightIcon ?
            <img src={rightIcon} onClick={rightHandle} /> :
            rightText ?
                <span onClick={rightHandle} >{rightText}</span> :
                <p></p>
      }

    </header>
  );
};

export default Header;