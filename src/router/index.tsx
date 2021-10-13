import { Route, Switch, Redirect } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'mobx-react-router';
import stores from 'src/stores';

import HomePage from 'src/pages/home';
import PropsPage from 'src/pages/props';
import StatePage from 'src/pages/state';

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, stores.routingStore);

const RouterConfig = () => {
  return (
    <Router basename="/" history={history}>
      <div className="main">
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home" render={(props) => <HomePage {...props} />} />
          <Route path="/props" render={(props) => <PropsPage {...props} />} />
          <Route path="/state" render={(props) => <StatePage {...props} />} />
        </Switch>
      </div>
    </Router>
  );
};
export default RouterConfig;
