import React from 'react';
import './header.css'

const Header = ({title}) => {
  return (
    <header id="header">
      <h2>{title}</h2>
    </header>
  );
};

export default Header;