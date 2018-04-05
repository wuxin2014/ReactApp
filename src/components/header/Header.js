import React from 'react';
import './header.css';

const Header = ({title, leftIcon, rightIcon, rightHandle, leftHandle}) => {
  return (
    <header id="header">
      <img src={leftIcon} onClick={leftHandle} />
      <h2>{title}</h2>
      <img src={rightIcon} onClick={rightHandle}/>
    </header>
  );
};

export default Header;