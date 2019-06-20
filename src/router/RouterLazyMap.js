import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';

import Home from '../contanier/home/Home';
import NotFound from '../components/common/NotFound';
import Register from '../contanier/register/Register';
import Personal from '../contanier/personal/Personal';
import Collect from '../contanier/personal/collect/Collect';
import About from '../contanier/personal/about/About';
import Feedback from '../contanier/personal/feedback/Feedback';
import MainPage from '../contanier/MainPage';
import ForgetPwd from '../contanier/forget/ForgetPwd';
// import SettingPage from '../contanier/personal/setting/SettingPage';
// import IntegralPage from '../contanier/personal/integral/IntegralPage';
import Loading from '../components/Loading';

/**
 * 替换有什么好处？
 显然，当我们考虑升级或重构时，我们总是用“它以目前的方式工作得很好”为借口推脱。那么，这是否值得升级？

 更小的bundle： react-loadable gzip后大概是 2K，去掉这个第三方库后，所以打包时间并没有减少多少，但是确确实实减少了2K。

 增加可维护性：使用 React 的核心库，总比第三方库更容易维护
 */

const LoadableComponent = Loadable({
  loader: () => import(/* webpackChunkName:'integerPage'*/'../contanier/personal/integral/IntegralPage'),
  loading: Loading,
});

const LazySetComp = React.lazy(() => import(/* webpackChunkName: "setting" */'../contanier/personal/setting/SettingPage'));


const RouterMap = () => {
  return (
    <Router>
      <div style={{height: 640}}>
        <React.Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={MainPage} />
            <Route path="/register" component={Register} />
            <Route path="/personal/about" component={About} />
            <Route path="/personal/collect" component={Collect} />
            <Route path="/personal/feedback" component={Feedback} />
            <Route path="/personal/integral" component={LoadableComponent} />
            <Route path="/personal/setting" component={LazySetComp} />
            <Route path="/personal" component={Personal} />
            <Route path="/forgetPwd" component={ForgetPwd} />
            <Route path="*" component={NotFound} />
          </Switch>
        </React.Suspense>
      </div>
    </Router>
  );
};

export default RouterMap;
