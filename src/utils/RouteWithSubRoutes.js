import React from 'react';
import {Route} from 'react-router-dom';

//  {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
export const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (<route.component {...props} routes={route.routes} />)}
  />
);
