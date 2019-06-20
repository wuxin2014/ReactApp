import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from '../components/Loading';

/**
 * 替换有什么好处？
 显然，当我们考虑升级或重构时，我们总是用“它以目前的方式工作得很好”为借口推脱。那么，这是否值得升级？

 更小的bundle： react-loadable gzip后大概是 2K，去掉这个第三方库后，所以打包时间并没有减少多少，但是确确实实减少了2K。

 增加可维护性：使用 React 的核心库，总比第三方库更容易维护
 */

const ATest = Loadable({
  loader: () => import(/* webpackChunkName:'ATest' */ '../container/ATest'),
  loading: Loading,
});


const BTest = Loadable({
  loader: () => import(/* webpackChunkName:'BTest' */ '../container/BTest'),
  loading: Loading,
});


const RouterMap = () => {
  return (
    <Router>
      <div style={{height: 640}}>
        <Switch>
          <Route exact path="/" component={ATest} />
          <Route exact path="/bTest" component={BTest} />
        </Switch>
      </div>
    </Router>
  );
};

export default RouterMap;
