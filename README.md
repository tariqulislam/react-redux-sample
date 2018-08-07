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

## Create `Home` Component for `Resolve Home Reducers`

1. Create `Home` component at `src/components/Home.js` file at project
2. Import all dependency and reducer to connect with `redux` with `Home` react component
```javascript
import React, {Component} from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
```

3. `{Component}` and `React` of  `react` package help us to build the `React Component`.
4. `{ push }`  of `react-router-redux` package  help to `route` from one component to another component
5. `{  bindActionCreators }` of `redux` package  provide the feature to mapping action with any UI `event` and also tigger the `redux` action which are `declare` at `redux action`
6. `{ connect}` is curry function of `react-redux` package, which will make connect with `reducer` of this component
`connect(mapStateToProps, mapDispatchToProps)(<Component name>)`
 
7. ` mapStateToProps`: which will map all the state between `redux reducer` and `component`
8. `mapDispatchToProps`: which will map all the `dispatch` action  with `component` UI’s `event` 
<Component Name> will take component name such as `Home`

## Design the Home Component
```javascript
class Home extends Component {
  componentWillMount () {
       this.props.hideParagraphInfo()
  }
  render () {
      return ( 
       <div>
		Home Page
        </div>
      )
  }
}
```
1. I have extends the `React`  `Component` Class to create `Home` Component
2. `React Component` , we need `constructor` , `componentWillMount` , `componentDidMount` and `render` function
3. `constructor`: constructor() If you don't initialize state and you don't bind methods, you don't need to implement a constructor for your React component. The constructor for aReact component is called before it is mounted
4. `componentWillMount`:  when the props and state are set, we finally enter the realm of Life Cycle methods. The first true life cycle method called is componentWillMount(). This method is only called one time, which is before the initial render. Since this method is called before render()  function., we can declare any `redux` `action` when component is loading.
5. `componentDidMount`: componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
6. To Render element using `render()` function. The render() function should be pure, meaning that it does not modify component state, it returns the same result each time it’s invoked, and it does not directly interact with the browser.

## Add code for connect to redux store to Home Component end of `src/components/Home.js` file
```javascript
const mapStateToProps = (state) => ({
   showInfo: state.home.showInfo
})

const mapDispatchToProps = dispatch => bindActionCreators({
   showParagraphInfo,
   hideParagraphInfo,
   goToAboutPage: () => push('/about-us')
}, dispatch)

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Home)
```

1. `mapStateToPorps`:  contains `showInfo`  redux `state` which create the `mapping` through React Component to Redux Store
2. `mapStateToProps`:  which will contains `showParagraphInfo` , `hideParagraphInfo` and `goToAboutPage` redux function, which create mapping between `home.reducer` with `Home` component
3. Then `connect` function connect `Home` component with Redux Store.
4. `goToAboutPage1: () => push(‘/about-us’)` function change the route of the `component` and it will effect the `redux store` of the `home` component and `about` component also.

# Add Action and Load Home Component with Redux Store at `componentWillMount` and `render` function 
```javascript
componentWillMount () {
       this.props.hideParagraphInfo()
  }
 ```

`this.props.hideParagraphInfo()` redux `action` call in `componentWilMount` to hide the paragraph of Home Page.
```javascript
render () {
      return ( <div>
           <h1> Home Page</h1>
           {!this.props.showInfo &&   <button onClick={() => this.props.showParagraphInfo()}> Show Paragraph </button>}
           &nbsp; &nbsp;
           {this.props.showInfo && <button onClick={() => this.props.hideParagraphInfo()}>Hide Paragraph</button>}
           { this.props.showInfo && <p> this is paragraph</p>}
           <button onClick={() => this.props.goToAboutPage()}> Go To About Page</button>
        </div>
      )
  }
```

1. `this.props.showParagraphInfo()` redux `action` added in <button> `onClick` event to show the paragraph
2. `!this.props.showInfo` will check the `redux store` provide the `showInfo`  false, it will hide `Show  Paragraph` button  and  `this.props.showInfo` is `redux store state` which helps react component to  shows the paragraph at `Home component`






