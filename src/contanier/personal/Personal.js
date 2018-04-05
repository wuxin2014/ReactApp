import React from 'react';
import './personal.css';

const Personal = () => {
  return(
      <div id="personal_wrap">
        <header id="header">
          <img src="/static/img/back.png" style={{width: 40, height: 40}} />
          <h2>个人中心</h2>
          <span>注册</span>
        </header>
        <div id="un_login">
          <form>
            <input placeholder="请输入手机号" /><br />
            <input placeholder="请输入密码" />
            <div className="login_btn">
              <button>登录</button>
            </div>
          </form>
        </div>
        <div id="login_done">

        </div>

        <div id="grid_wrap">
          <div>
            <img src="/static/img/jifen.png" />
            <span>积分</span>
          </div>
          <div>
            <img src="/static/img/shoucang.png" />
            <span>收藏</span>
          </div>
          <div>
            <img src="/static/img/setting.png" />
            <span>设置</span>

          </div>
          <div>
            <img src="/static/img/about.png" />
            <span>关于我们</span>

          </div>
          <div>
            <img src="/static/img/feedback.png" />
            <span>意见反馈</span>

          </div>
          <div>
            <img src="/static/img/connect.png" />
            <span>联系我们</span>

          </div>
        </div>

      </div>
  );
};

export default Personal;