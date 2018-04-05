import React from 'react';
import './underlineText.css';

const UnderlineText = ({text, selectTab}) => {
  return (
      <div id="underline_text_wrap" onClick={selectTab}>
        {text}
      </div>
  );
};

export default UnderlineText;
