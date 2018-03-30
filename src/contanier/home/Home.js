import React from 'react';
import ListItem from '../../components/home/ListItem';
import './home.css';

const Home = () => {
  return (
      <div style={{height: '100%'}}>
        <header id="header">
          魅力女人
          <span>注册</span>
        </header>
        <ListItem />
      </div>
  );
};

export default Home;