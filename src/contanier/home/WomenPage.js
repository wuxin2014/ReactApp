import React from 'react';
import Slider from '../../components/slider/Slider';
import ListItem from '../../components/home/ListItem';

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



// <Slider slides= {slides} time="2000" />

class WomenPage extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    const {history} = this.props;
    return (
        <div>
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
    );
  }
}

export default WomenPage;