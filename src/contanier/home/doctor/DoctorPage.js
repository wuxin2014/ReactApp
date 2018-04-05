import React from 'react';
import DoctorConsultPage from './DoctorConsultPage';
import DoctorReplyPage from './DoctorReplyPage';
import CommonTab from '../../../components/common/CommonTab';

const tabData = ['资讯', '回复'];

function showPage(tabIndex) {
  switch (tabIndex) {
    case 0:
      return (<DoctorConsultPage />);
    case 1:
      return (<DoctorReplyPage />);
  }
}

class DoctorPage extends React.Component {
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
        <div>
          <CommonTab tabData={tabData} handleSelect={this.setCurIndex} />
          <div>
            {
              showPage(curIndex)
            }
          </div>
        </div>
    );
  }
}

export default DoctorPage;