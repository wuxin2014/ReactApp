import React from 'react';
import UnderlineText from './UnderlineText';

const CommonTab = ({tabData, handleSelect, curTab=0}) => {
  return (
    <div style={{height: 44, display: 'flex', flexDirection: 'row', alignItems: 'center', borderBottom: '2px solid #cccccc'}}>
      {
        tabData.map((item, index) => {
          return (
            <UnderlineText
              key={index}
              text={item}
              selectTab={() => {handleSelect(index)}}
              active={curTab===index? 'active' : null} />
          );
        })
      }
    </div>
  );
};

export default CommonTab;