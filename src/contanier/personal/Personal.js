import React from 'react';
import './personal.css';

const Personal = () => {
  return(
      <div id="personal_wrap">
        <header id="header">
          <h2>个人中心</h2>
        </header>
        <div id="un_login">
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
              <button>登录</button>
            </div>
          </form>
        </div>
        <div id="login_done">

        </div>

        <div id="grid_wrap">
          <div id="grid">
            <div>
              积分
            </div>
            <div>
              收藏
            </div>
            <div>
              设置
            </div>
          </div>
          <div id="grid">
            <div>
              关于我们
            </div>
            <div>
              意见反馈
            </div>
            <div>
              联系我们
            </div>
          </div>
        </div>

      </div>
  );
};

export default Personal;