import React from 'react';
import Header from '../../../components/header/Header';
import { icons } from '../../../utils';

const FeedBack = ({history}) => {
  return (
    <div>
      <Header
          leftIcon={icons.back}
          leftHandle={() => {history.goBack();}}
          title="意见反馈" />
    </div>
  );
};

export default FeedBack;
