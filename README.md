# React Redux Sample With create-create-app

## Prerequsites

I have use “create-react-app” for building the primary project, which will helps you to understand how redux works with react js.
We need Node js V1.8.10 stable, “create-react-app” for develop the simple project with react and redux. Need some plugins related to “react js” named.
React Router Dom
Redux Thunk
React Router Redux
Redux Promise
Axios

### What is React Router?
React Router is the standard routing library for React. It keeps your UI sync with the URL. it has a simple API with powerful features  like Lazy code Loading, dynamic route matching and Location transition handling build right in. To know about react router you can go to this link “react-router”

### What is Redux Thunk?

Redux Thunk is middleware, which allows you to write action creators that return a function instead of a action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. To know redux thunk more about, you can go to this link “redux-thunk”.

### What is React Router Dom?
React Router includes three main packages:

1. react-router. This is the core package for the router.
2. react-router-dom. It contains the DOM bindings for React Router. In other words, the router components for websites.
3. react-router-native. It contains the React Native bindings for React Router. In other words, the router components for an app development environment using React Native.

## Installations

1. Download git Repository `git clone https://github.com/tariqulislam/react-redux-sample/`
2. then Run Command for `npm install`
3. After that run command `npm start` or `yarn start`

## Create the Reducer for Redux Store for Sample component

Then I have create file named `home.reducer.js` file at `src/reducers` directory at project which will contains  `action constraint`, `actions`, `reducer` for `Home Component`, `state` for

1. Add the `action constraint` to `home.reducer.js` which will show and hide the paragraph of home page

```javascript
export const HIDE_HOME_INFO = 'HIDE_HOME_INFO'
export const SHOW_HOME_INFO = 'SHOW_HOME_INFO'
```

2. Initialize the `state` of the `reducer` by:
```javascript
const initialState = {
   showInfo: false
}
```
3. Then add the action those action constraint.
```javascript
export const showParagraphInfo = () => {
   return dispatch => { dispatch({  type: SHOW_HOME_INFO })}
}

export const hideParagraphInfo = () => {
   return dispatch => { dispatch({  type: HIDE_HOME_INFO })}
}
```
4. Create the Reducer for `Home Component` at `home.reducer.js` file
```javascript
export default (state= initialState, action) => {
   switch (action.type) {
       case SHOW_HOME_INFO:
           return {
               ...state,
               showInfo: true
           }
       case HIDE_HOME_INFO:
           return {
               ...state,
               showInfo: false
           }
       default:
           return state
   }
}
```
5. Then change the code at `src/core/rootReducer.js` file and add `home.reducer`  for combine and resolve  the `home module reducer` to `redux store`
```javascript
import { combineReducers } from 'redux'
import home  from '../reducers/Home/home.reducer'
const rootReducer = combineReducers({  home})
export default rootReducer
```






