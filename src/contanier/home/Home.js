import React from 'react';
import ListItem from '../../components/home/ListItem';
import './home.css';
import Header from '../../components/header/Header';
import Slider from '../../components/slider/Slider';

const slides = [{
  background: "#e893ba",
  link: "https://zhuangtongfa.github.io/"
}, {
  background: "#cdcdcd",
  link: "https://zhuangtongfa.github.io/"
}, {
  background: "orange",
  link:"https://zhuangtongfa.github.io/"
}];

const icons = {
  home: "/static/img/home.png",
  personal: "/static/img/icon_centre.png"
};

const Home = ({history}) => {
  return (
    <div style={{height: '100%'}}>
      <Header
          title="魅力女人"
          leftIcon={icons.home}
          rightIcon={icons.personal}
          leftHandle={() => {alert('aa');}}
          rightHandle={() => {history.push('/personal')}} />

      <Slider slides= {slides} time="2000" />
      <ListItem />
      <ListItem />
      <ListItem />
    </div>
  );
};

export default Home;