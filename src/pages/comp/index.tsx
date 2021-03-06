import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router, Link, useRouteMatch } from 'react-router-dom';

import Demo1Page from './demo1/Parent';
import Demo2Page from './demo2/Parent';

export default function PropsIndexPage() {
  let match = useRouteMatch();

  return (
    <Router>
      <div>
        <p>props page</p>
        <nav>
          <ul>
            <li>
              <Link to={`${match.url}/demo1`}>函数组件 和 类组件</Link>
            </li>
            <li>
              <Link to={`${match.url}/demo2`}>生命周期</Link>
            </li>
            {/* <li>
              <Link to="/about">生明周期</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li> */}
          </ul>
        </nav>
        <Switch>
          <Route path={`${match.url}/demo1`} render={(props) => <Demo1Page {...props} />} />
          <Route path={`${match.url}/demo2`} render={(props) => <Demo2Page {...props} />} />
          {/* <Route path="/props" render={(props) => <PropsPage {...props} />} /> */}
        </Switch>
      </div>
    </Router>
  );
}
