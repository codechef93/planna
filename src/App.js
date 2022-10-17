import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppContainer from './containers';
import store from './store';
import './assets/index.css';
import './assets/spacing.css';
import './assets/fontsize.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  </Provider>
);
export default App;
