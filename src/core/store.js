import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import { createBrowserHistory } from 'history'
import rootReducer from './rootReducer'

export const history = createBrowserHistory()

const initialState = {}
const enhancers = []
const middleware = [thunk, promise, routerMiddleware(history)]

if(process.env.NODE_ENV === 'development') {
    const devToolExtension = window.__REDUX_DEVTOOLS_EXTENSION__
    if(typeof devToolExtension === 'function') { enhancers.push(devToolExtension())}
}

const composedEnhancers = compose(applyMiddleware(...middleware),...enhancers)
const store = createStore(rootReducer,initialState,composedEnhancers)

export default store