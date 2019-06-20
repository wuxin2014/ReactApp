import React from 'react';
import Header from '../../../components/header/Header';
import {icons} from '../../../utils';

class IntegralPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    const {history} = this.props;
    return (
      <div>
        <Header
          leftIcon={icons.back}
          leftHandle={() => {history.goBack();}}
          title="积分"
          rightText="规则"
          rightHandle={() => {history.push('/register');}} />

          <div>

          </div>
      </div>
    );
  }
}

export default IntegralPage;
