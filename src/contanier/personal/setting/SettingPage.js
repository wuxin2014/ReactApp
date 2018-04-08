import React from 'react';
import Header from '../../../components/header/Header';
import {icons} from '../../../utils';

const SettingPage = ({history}) => {
  return (
    <div>
      <Header
          leftIcon={icons.back}
          leftHandle={() => {history.goBack();}}
          title="设置" />
    </div>
  );
};

export default SettingPage;