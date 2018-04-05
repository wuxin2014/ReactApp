import React from 'react';
import Slider from '../../../components/slider/Slider';
import ListItem from '../../../components/home/ListItem';

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

const listData = [
  {
    id: 1,
    imgUrl: '/static/img/list_pic.jpg',
    bigTitle: '美丽的极致',
    smallTitle: '魅力女人： 杨澜',
    contentDetail: '美丽的极致是忘却自己的一刻，这s时的你不仅是最自然的，因为你不需要取悦任何人'
  },
  {
    id: 2,
    imgUrl: '/static/img/list_pic.jpg',
    bigTitle: '美丽的极致',
    smallTitle: '魅力女人： 杨澜',
    contentDetail: '美丽的极致是忘却自己的一刻，这s时的你不仅是最自然的，因为你不需要取悦任何人'
  },
  {
    id: 3,
    imgUrl: '/static/img/list_pic.jpg',
    bigTitle: '美丽的极致',
    smallTitle: '魅力女人： 杨澜',
    contentDetail: '美丽的极致是忘却自己的一刻，这s时的你不仅是最自然的，因为你不需要取悦任何人'
  },
];

// <Slider slides= {slides} time="2000" />

class WomenPage extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    const {history} = this.props;
    return (
        <div>
          {
            listData.map((listItem) => {
              return (
                  <ListItem listItem={listItem} key={listItem.id} />
              );
            })
          }
        </div>
    );
  }
}

export default WomenPage;