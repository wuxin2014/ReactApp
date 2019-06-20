import React from 'react';
import Header from '../../components/header/Header';
import {icons} from '../../utils';

const ForgetPwd = ({history}) => {
  return (
    <div>
      <Header
        leftIcon={icons.back}
        leftHandle={() => {history.goBack();}}
        title="忘记密码" />
      <p>注册后专享魅力女人优质会员服务</p>
      <form>
        <input placeholder="请输入手机号" /><br />
        <input placeholder="请输入验证码" /><br />
        <button>下一步</button>
      </form>
    </div>
  );
};

export default ForgetPwd;