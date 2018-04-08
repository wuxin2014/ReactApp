import React from 'react';
import Header from '../../../components/header/Header';
import { icons, adviseTip } from '../../../utils';

const FeedBack = ({history}) => {
  return (
    <div>
      <Header
        leftIcon={icons.back}
        leftHandle={() => {history.goBack();}}
        title="意见反馈" />

      <div style={{padding: 20}}>
        <p style={{textIndent: 20, color: '#d44580' }}>{adviseTip}</p>
        <form>
          <textarea
            style={{width: '100%', height: 120, borderRadius: 5, marginTop: 15 }}
            placeholder="请输入你的意见"/>
        </form>
      </div>
    </div>
  );
};

export default FeedBack;
