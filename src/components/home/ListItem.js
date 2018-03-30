import React from 'react';
import './listItem.css';

const ListItem = () => {
  return (
    <li className="item">
      <img src="../../static/img/hot_list_pic1" alt="1" />
      <div className="content_des">
        <span className="big_title">美丽的极致</span><span className="small_title">魅力女人： 杨澜</span>
        <p>美丽的极致是忘却自己的一刻，这时的你不仅是最自然的，因为你不需要取悦任何人</p>
      </div>
    </li>
  );
};

export default ListItem;