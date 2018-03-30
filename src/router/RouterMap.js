import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../contanier/home/Home';
import NotFound from '../components/common/NotFound';
import Register from '../contanier/register/Register';
import Personal from '../contanier/personal/Personal';
import Collect from '../contanier/collect/Collect';

const RouterMap = () => {
  return (
    <Router>
      <div style={{height: 640, overflow: 'hidden'}}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/personal" component={Personal} />
          <Route path="/collect" component={Collect} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default RouterMap;