import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import MainView from './containers/index';

const App = () => (
  <Provider store={store}>
    <MainView />
  </Provider>
);

export default App;

