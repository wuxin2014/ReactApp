import React from 'react';
import ListItem from '../../components/home/ListItem';
import './home.css';
import Header from '../../components/header/Header';
import Slider from '../../components/slider/Slider';

const slides = [{
  background: "#efefef",
  link: "https://zhuangtongfa.github.io/"
}, {
  background: "#cdcdcd",
  link: "https://zhuangtongfa.github.io/"
}, {
  background: "#d44580",
  link:"https://zhuangtongfa.github.io/"
}];

const Home = () => {
  return (
    <div style={{height: '100%'}}>
      <Header title="魅力女人" />
      <Slider slides= {slides} time="2000" />
      <ListItem />
      <ListItem />
      <ListItem />
    </div>
  );
};

export default Home;