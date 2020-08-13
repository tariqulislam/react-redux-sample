import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import store, {history} from './core/store';
import './assets/index.css';
import './assets/App.scss';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import {I18nextProvider} from 'react-i18next'
import i18n from './i18n'

ReactDOM.render(
    <I18nextProvider i18n={i18n}>
        <Provider store={store}>
            <Router history={history}>
                <div>
                    <App/>
                </div>
            </Router>
        </Provider>
    </I18nextProvider>
    , document.getElementById('root'));
registerServiceWorker();
