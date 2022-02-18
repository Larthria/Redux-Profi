import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';

ReactDOM.render(
  <Provider store={setupStore()}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

