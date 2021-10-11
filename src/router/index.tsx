import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import HomePage from 'src/pages/home';

const RouterConfig = () => {
  return (
    <Router>
      <div className="main">
        <Switch>
          <Route path="/home" render={(props) => <HomePage {...props} />} />
          <Route path="/" render={(props) => <HomePage {...props} />} />
        </Switch>
      </div>
    </Router>
  );
};
export default RouterConfig;
