import React from 'react';
import './listItem.css';

const ListItem = ({title, icon, content}) => {
  const handleTouchMove = (ev) => {
    console.log(ev.target);
    ev.target.style.left = -20+'px';
    ev.stopPropagation();
  };

  return (
    <li className="collect_item">
      <div className="item_wrap" onTouchMove={handleTouchMove}>
        <img src={icon} alt="1" />
        <div>
          <h4>{title}</h4>
          <p>{content}</p>
        </div>
        <div>
          删除
        </div>
      </div>
    </li>
  );
};

export default ListItem;