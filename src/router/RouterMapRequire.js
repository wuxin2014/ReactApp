import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// require.ensure 和 AMD require将采用异步式调用
// require.ensure和amd require将默认采用异步的加载方式来调用，而非之前的当模块请求加载完成后再在回调函数中同步触发。
// require.ensure将基于原生的Promise对象重新实现，当你在使用 require.ensure 时请确保你的运行环境默认支持Promise对象，如果缺少则推荐使用安装polyfill.

const ATest = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../container/ATest').default)
  },'ATest')
}

const BTest = (nextState, cb) => {
  require.ensure([], require => {
    cb(null, require('../container/BTest').default)
  },'BTest')
}

const RouterMapRequire = () => {
  return (
    <Router>
      <div style={{height: 640}}>
        <Switch>
          <Route exact path="/" getComponent={ATest} />
          <Route exact path="/bTest" getComponent={BTest} />
        </Switch>
      </div>
    </Router>
  );
};

export default RouterMapRequire;
