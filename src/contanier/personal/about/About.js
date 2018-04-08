import React from 'react';
import Header from '../../../components/header/Header';
import { icons } from '../../../utils';

const About = ({history}) => {
  return (
      <div>
        <Header
            leftIcon={icons.back}
            leftHandle={() => {history.goBack();}}
            title="关于我们" />
        <img src="/static/img/swipe1.jpg" />
        <p>

        </p>
      </div>
  );
};

export default About;