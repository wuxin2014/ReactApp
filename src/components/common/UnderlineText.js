import React from 'react';
import './underlineText.css';

const UnderlineText = ({text, selectTab, active}) => {
  return (
    <div id="underline_text_wrap" className={active} onClick={selectTab}>
      {text}
    </div>
  );
};

export default UnderlineText;
