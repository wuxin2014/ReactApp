import React from 'react';
import './register.css';

const Register = () => {
  return (
    <div id="register">
      <header id="header">
        <h2>注册</h2>
      </header>
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