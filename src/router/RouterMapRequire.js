import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Loading from '../components/Loading';

const ATest = React.lazy(() => import(/* webpackChunkName: "ATest" */'../container/ATest'));
const BTest = React.lazy(() => import(/* webpackChunkName: "BTest" */'../container/BTest'));


const RouterMap = () => {
  return (
    <Router>
      <div style={{height: 640}}>
        <React.Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={ATest} />
            <Route path="/bTest" component={BTest} />
          </Switch>
        </React.Suspense>
      </div>
    </Router>
  );
};

export default RouterMap;
