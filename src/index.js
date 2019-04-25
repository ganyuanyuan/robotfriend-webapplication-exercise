import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import * as serviceWorker from './serviceWorker';
import 'tachyons';
import './index.css';
import App from './containers/App.js'
import {searchRobots} from './reducers.js';

const store = createStore(searchRobots)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));


serviceWorker.unregister();
