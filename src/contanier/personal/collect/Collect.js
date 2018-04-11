import React from 'react';
import Header from '../../../components/header/Header';
import { icons } from '../../../utils';
import CollectItem from './CollectItem';

const collectData = [
  {
    id: 1,
    title: '冬季护肤小贴士',
    content: '天气渐冷，如何维持皮肤水分是冬季护肤重点',
    icon: '/static/img/list_pic.jpg',
    delIcon: '/static/img/icon_delete2.png'
  },
  {
    id: 2,
    title: '冬季护肤小贴士',
    content: '天气渐冷，如何维持皮肤水分是冬季护肤重点',
    icon: '/static/img/list_pic.jpg',
    delIcon: '/static/img/icon_delete2.png'
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
        <ul style={{paddingTop: 10}}>
          {
            collectData.map((collectItem) => {
              return (
                <CollectItem
                    key={collectItem.id}
                    itemData={collectItem}/>
              );
            })
          }
        </ul>
      </div>
  );
};

export default Collect;