import React from 'react';
import ReactDOM from 'react-dom';
// import RouterLazyMap from './router/RouterLazyMap';
import RouterLoadableMap from './router/RouterLoadableMap';
// import AppTest from './container/AppTest';
import './static/css/common.css';

ReactDOM.render(
  <RouterLoadableMap />,
  document.getElementById('root')
);
