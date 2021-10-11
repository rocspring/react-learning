import React from 'react';
import { Provider } from 'mobx-react';
import I18nConfigProvider from 'src/components/common/i18n';
import stores from './stores';
import Router from './router';

import './App.scss';

function App() {
  return (
    <I18nConfigProvider>
      <Provider {...stores}>
        <Router></Router>
      </Provider>
    </I18nConfigProvider>
  );
}

export default App;
