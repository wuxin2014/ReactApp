import React from 'react';
import './home.css';
import Header from '../../components/header/Header';
import CustomText from '../../components/common/CustomText';
import WomenPage from './women/WomenPage';
import DoctorPage from './doctor/DoctorPage';
import ActivityPage from './activity/ActivityPage';
import LifePage from './life/LifePage';
import ConsultPage from './consult/ConsultPage';
import {icons, bottomData} from '../../utils';


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
    console.log('Home-constructor');
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
        <div style={{position: 'relative', paddingBottom: 80, paddingTop: 50}}>
          <div style={{width: '100%', position: 'fixed', top: 0, left: 0}}>
            <Header
              title={title}
              leftIcon={icons.home}
              rightIcon={icons.personal}
              leftHandle={() => {alert('aa');}}
              rightHandle={() => {history.push('/personal')}} />
          </div>
          <div>
            {
              showPage(curIndex, history)
            }
          </div>

          <div id="nav_bottom">
            {
              bottomData.map((item, index) => {
                return (
                  <CustomText
                    key={index}
                    icon={item.icon}
                    text={item.text}
                    handleClick={() => this.handleBottom(index)}
                    active={curIndex === index ? 'tab_active' : '' } />
                );
              })
            }
          </div>
        </div>
    );
  }

  componentWillMount() {
    console.log('Home-componentWillMount');
  }

  componentDidMount() {
    console.log('Home-componentDidMount');
  }

  componentWillReceiveProps(nextProps){
    console.log('Home-componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('Home-shouldComponentUpdate');
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Home-componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('Home-componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('Home-componentWillUnmount');
  }

}

export default Home;