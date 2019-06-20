import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../container/home/Home';
import NotFound from '../components/common/NotFound';
import Register from '../container/register/Register';
import Personal from '../container/personal/Personal';
import Collect from '../container/personal/collect/Collect';
import About from '../container/personal/about/About';
import Feedback from '../container/personal/feedback/Feedback';
import MainPage from '../container/MainPage';
import ForgetPwd from '../container/forget/ForgetPwd';
import SettingPage from '../container/personal/setting/SettingPage';
import IntegralPage from '../container/personal/integral/IntegralPage';
import Loadable from 'react-loadable'
import Loading from '../components/Loading'

/**
 * 使用React.lazy替换有什么好处？
 * 1. 使用React的核心库，总比第三方库更容易维护
 * 2. 更小的bundle, 在去掉这个第三方库后
 *
 * 缺点：
 * React.lazy不支持服务端渲染，react-loadable支持
 *
 * https://www.smooth-code.com/open-source/loadable-components/
 */

const LoadableComponent = Loadable({
  loader: () => import(/* webpackChunkName:'integerPage' */ '../container/personal/integral/IntegralPage'),
  loading: Loading,
});


const LazySetComp = React.lazy(() => import(/* webpackChunkName: "setting" */ '../container/personal/setting/SettingPage'));

const LazySetComponent = props => (
  <React.Suspense fallback={<Loading />}>
    <LazySetComp {...props} />
  </React.Suspense>
)

const RouterMap = () => {
  return (
    <Router>
      <div style={{height: 640}}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={MainPage} />
          <Route path="/register" component={Register} />
          <Route path="/personal/about" component={About} />
          <Route path="/personal/collect" component={Collect} />
          <Route path="/personal/feedback" component={Feedback} />
          <Route path="/personal/integral" component={IntegralPage} />
          <Route path="/personal/setting" component={SettingPage} />
          <Route path="/personal" component={Personal} />
          <Route path="/forgetPwd" component={ForgetPwd} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default RouterMap;
