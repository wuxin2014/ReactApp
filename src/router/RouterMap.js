import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../contanier/home/Home';
import NotFound from '../components/common/NotFound';
import Register from '../contanier/register/Register';
import Personal from '../contanier/personal/Personal';

const RouterMap = () => {
  return (
    <Router>
      <div style={{height: 640}}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/personal" component={Personal} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default RouterMap;