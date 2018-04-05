import React from 'react';
import './listItem.css';

const ListItem = ({listItem}) => {
  return (
    <li className="women_list_item_wrap">
      <img className="women_img" src={listItem.imgUrl} alt="1" />
      <div className="women_list_item_right">
        <div className="title_wrap">
          <span>{listItem.bigTitle}</span>
          <span>{listItem.smallTitle}</span>
        </div>
        <p>{listItem.contentDetail}</p>
      </div>
    </li>
  );
};

export default ListItem;