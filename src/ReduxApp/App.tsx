import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ConnectBasic from './view/Connect';
import store from './store';

import '../App.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <h1>Hello Redux</h1>
          <Link to="/">Redux 基本使用</Link>
          <Switch>
            <Route path="/" component={ConnectBasic} exact />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
