import React from 'react';
import Header from '../../../components/header/Header';
import ListItem from '../../../components/home/collect/ListItem';
import { icons } from '../../../utils';

const collectData = [
  {
    id: 1,
    title: '冬季护肤小贴士',
    content: '天气渐冷，如何维持皮肤水分是冬季护肤重点',
    icon: '/static/img/list_pic.jpg',
  },
  {
    id: 2,
    title: '冬季护肤小贴士',
    content: '天气渐冷，如何维持皮肤水分是冬季护肤重点',
    icon: '/static/img/list_pic.jpg',
  }
];

const Collect = ({history}) => {
  return (
      <div style={{paddingTop: 50}}>
        <div style={{width: '100%', position: 'fixed', top: 0, left: 0}}>
          <Header
            leftIcon={icons.back}
            leftHandle={() => {history.goBack();}}
            title="收藏" />
        </div>
        <ul style={{width: '100%', height: '100%', overflow: 'hidden'}}>
          {
            collectData.map((collectItem) => {
              return (
                <ListItem
                  key={collectItem.id}
                  title={collectItem.title}
                  content={collectItem.content}
                  icon={collectItem.icon}  />
              );
            })
          }
        </ul>
      </div>
  );
};

export default Collect;