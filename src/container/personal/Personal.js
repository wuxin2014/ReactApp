import React from 'react';
import './personal.css';
import Header from '../../components/header/Header';
import { icons, gridData } from '../../utils';


const Personal = ({history}) => {
  return(
      <div id="personal_wrap">
        <Header
          leftIcon={icons.back}
          leftHandle={() => {history.goBack();}}
          title="个人中心"
          rightText="注册"
          rightHandle={() => {history.push('/register');}} />

        <div id="un_login">
          <p>注册成为魅力女人会员，获得积分</p>
          <form>
            <input placeholder="请输入用户名" /><br />
            <input placeholder="请输入密码" />
            <a onClick={() => {history.push('/forgetPwd')}}>忘记密码</a>
            <div className="login_btn">
              <button>登录</button>
            </div>
          </form>
        </div>
        <div id="login_done">

        </div>

        <div id="grid_wrap">
          {
            gridData.map((gridItem, index) => {
              return (
                <div key={index} onClick={() => {history.push(gridItem.targetUrl)}}>
                  <img src={gridItem.icon} />
                  <span>{gridItem.text}</span>
                </div>
              );
            })
          }
        </div>

      </div>
  );
};

export default Personal;