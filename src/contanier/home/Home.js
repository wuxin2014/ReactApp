import React from 'react';
import './home.css';
import Header from '../../components/header/Header';
import CustomText from '../../components/common/CustomText';
import WomenPage from './women/WomenPage';
import DoctorPage from './doctor/DoctorPage';
import ActivityPage from './activity/ActivityPage';
import LifePage from './life/LifePage';
import ConsultPage from './consult/ConsultPage';


const icons = {
  home: "/static/img/home.png",
  personal: "/static/img/icon_centre.png"
};

const bottomData = [
  {
    icon: "static/img/icon_life.png",
    text: "生活"
  }, {
    icon: "static/img/icon_consult.png",
    text: "资讯"
  }, {
    icon: "static/img/my.png",
    text: "魅力女人"
  }, {
    icon: "static/img/icon_activity.png",
    text: "活动"
  }, {
    icon: "static/img/icon_doctor.png",
    text: "医生"
  }
];

function showPage(index, history) {
  switch(index){
    case 0:
      return (<LifePage />);
    case 1:
      return (<ConsultPage />);
    case 2:
      return (<WomenPage history={history} />);
    case 3:
      return (<ActivityPage />);
    case 4:
      return (<DoctorPage />);

  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curIndex: 0,
    };
    this.handleBottom = this.handleBottom.bind(this);
  }


  handleBottom(index) {
    this.setState({
      curIndex: index
    });
  }

  render() {
    const {history} = this.props;
    const {curIndex} = this.state;
    const title = bottomData[curIndex].text;
    return (
        <div style={{height: '100%'}}>
          <Header
              title={title}
              leftIcon={icons.home}
              rightIcon={icons.personal}
              leftHandle={() => {alert('aa');}}
              rightHandle={() => {history.push('/personal')}} />
          <div>
            {
              showPage(curIndex, history)
            }
          </div>

          <div id="nav_bottom">
            {
              bottomData.map((item, index) => {
                return (
                    <CustomText key={index} icon={item.icon} text={item.text} handleClick={() => this.handleBottom(index)} />
                );
              })
            }
          </div>
        </div>
    );
  }
}

export default Home;