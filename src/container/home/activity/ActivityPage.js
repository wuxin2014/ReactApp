import React from 'react';
import {activityTabData} from '../../../utils';
import UnderlineText from '../../../components/common/UnderlineText';
import PromotionFragment from './PromotionFragment';
import MemberFragment from './MemberFragment';
import ParentChildFragment from './ParentChildFragment';

function showPage(tabIndex) {
  switch (tabIndex) {
    case 0:
      return (<PromotionFragment />);
    case 1:
      return (<MemberFragment />);
    case 2:
      return (<ParentChildFragment />);
  }
}


class ActivityPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      curIndex: 0,
    };
    this.setCurIndex = this.setCurIndex.bind(this);
  }

  setCurIndex(tabIndex){
    this.setState({
      curIndex: tabIndex,
    });
  }

  render() {
    const {curIndex} = this.state;
    return (
      <div style={{backgroundColor: '#ccc'}}>
        <div style={{display: 'flex', flexDirection: 'row', backgroundColor: 'white'}}>
          {
            activityTabData.map((tabItem, index) => {
              return(
                <UnderlineText
                  key={index}
                  text={tabItem}
                  selectTab={() => {this.setCurIndex(index)}}
                  active={curIndex === index ? 'active' : ''} />
              );
            })
          }
        </div>
        {
          showPage(curIndex)
        }
      </div>

    );
  }
}

export default ActivityPage;