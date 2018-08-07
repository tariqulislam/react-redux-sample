import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router  } from 'react-router-dom'
import store,  {history}  from './core/store';
import './assets/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Provider store={store}>
<Router history={history}>
   <div>
    <App />
   </div>
</Router>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
