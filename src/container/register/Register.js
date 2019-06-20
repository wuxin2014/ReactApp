import React from 'react';
import './register.css';
import Header from '../../components/header/Header';
import { icons } from '../../utils';

const Register = ({history}) => {
  return (
    <div id="register">
      <Header
        leftIcon={icons.back}
        leftHandle={() => {history.goBack();}}
        title="注册" />
      <p>注册后专享女人魅力优质会员服务</p>
      <form>
        <label>
          用户名：
          <input placeholder="请输入手机号"/>
        </label><br />
        <label>
          密码：
          <input placeholder="请输入密码"/>
        </label>
        <div className="login_btn">
          <button>完成注册</button>
        </div>
      </form>
    </div>
  );
};

export default Register;