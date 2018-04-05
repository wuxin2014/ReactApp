import React from 'react';
import './customText.css';

const CustomText = ({text, icon, handleClick}) => {
  return (
      <div className="custom_text_wrap" onClick={handleClick}>
        <img src={icon} />
        <span>{text}</span>
      </div>
  );
};

export default CustomText;
