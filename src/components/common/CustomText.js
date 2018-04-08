import React from 'react';
import './customText.css';

const CustomText = ({text, icon, handleClick, active}) => {

  const param = {
    className: `custom_text_wrap ${active}`,
    onClick: handleClick
  };

  return (
      <div {...param}>
        <img src={icon} />
        <span>{text}</span>
      </div>
  );
};

export default CustomText;
