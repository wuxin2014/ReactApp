import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../contanier/home/Home';
import NotFound from '../components/common/NotFound';
import Register from '../contanier/register/Register';
import Personal from '../contanier/personal/Personal';
import Collect from '../contanier/personal/collect/Collect';
import About from '../contanier/personal/about/About';
import Feedback from '../contanier/personal/feedback/Feedback';
import MainPage from '../contanier/MainPage';

const RouterMap = () => {
  return (
    <Router>
      <div style={{height: 640, overflow: 'hidden'}}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={MainPage} />
          <Route path="/register" component={Register} />
          <Route path="/personal/about" component={About} />
          <Route path="/personal/collect" component={Collect} />
          <Route path="/personal/feedback" component={Feedback} />
          <Route path="/personal" component={Personal} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default RouterMap;