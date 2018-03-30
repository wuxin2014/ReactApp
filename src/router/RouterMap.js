import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../contanier/Home';
import NotFound from '../components/common/NotFound';

const RouterMap = () => {
  return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </div>
  );
};

export default RouterMap;