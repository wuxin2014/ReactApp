import React from 'react';
import './listItem.css';

const ListItem = () => {
  const handleTouchMove = (ev) => {
    console.log(ev.target);
    ev.target.style.left = -20+'px';
    ev.stopPropagation();
  };
  return (
    <li className="collect_item">
      <div className="item_wrap" onTouchMove={handleTouchMove}>
        <img src="/static/img/list_pic.jpg" alt="1" />
        <div className="collect_item_right">
          <h4>美丽的极致</h4>
          <p>美丽的极致是忘却自己的一刻，这时的你不仅是最自然的，因为你不需要取悦任何人</p>
        </div>
        <div>
          删除
        </div>
      </div>
    </li>
  );
};

export default ListItem;