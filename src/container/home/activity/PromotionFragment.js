import React from 'react';

const data = [
  {
    id: 1,
    detailDes: '美妆即将开始，小编在这里列出各大品牌的优惠信息，准备好抢购吧。',
    imgUrl: '/static/img/swipe1.jpg',
  },
  {
    id: 2,
    detailDes: '某某十一年周庆，感恩回馈，周年狂欢月，先加入会员有机会抽取大奖。',
    imgUrl: '/static/img/swipe1.jpg',
  },
  {
    id: 3,
    detailDes: '某某十一年周庆，感恩回馈，周年狂欢月，先加入会员有机会抽取大奖。',
    imgUrl: '/static/img/swipe1.jpg',
  }
];

const PromotionFragment = () => {
  return (
    <div>
      {
        data.map((infoItem) => {
          return (
            <div key={infoItem.id} style={{backgroundColor: 'white', marginTop: 10, padding: 10}}>
              <img src={infoItem.imgUrl} style={{width: '100%'}}/>
              <p>{infoItem.detailDes}</p>
            </div>
          )
        })
      }
    </div>
  );
};

export default PromotionFragment;