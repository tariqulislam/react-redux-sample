  What is React JS?
   React is a declarative, efficient, and flexible JavaScript library for building
 user interfaces. It lets you compose complex UIs from small and isolated
 pieces of code called “components”. We'll get to the funny XML-like tags
 soon.
 
  React is Declarative Programming and How?
Declarative programming is a programming paradigm.that expresses the logic of a computation without describing its control flow. For Declarative programming developer has less control over process and control flow, tells other or other process to do the job.
Such as ask your friend to do your homework, he or she will do that, you don’t care.
Imperative programming is a programming paradigm that uses statements that change a program’s state. More control over control flow and processes. Imperative programming is,
you will do your homework by yourself and you will care about that job.
   
 React is Declarative Programming and How?
    Imperative Programming: In this figure, we have full control over this button color. We can change the color by changes its different attributes, we also have full control over click option to change color the button.
Declarative Programming: In react js, we can change the color of the button without touch the button control, just declares element should rendered give current state and react changes the color without manipulate the DOM itself.
   
 What is Redux and Redux Flow for React JS?
  Redux is a predictable state container for JavaScript apps. Most popular state management framework for react JS.
    
  Configure the Redux with React JS?
I have use “create-react-app” for building the primary project, which will helps you to understand how redux works with react js.
We need Node js V1.8.10 stable, “create-react-app” for develop the simple project with react and redux. Need some plugins related to “react js” named.
1. React Router Dom 2. Redux Thunk
3. React Router Redux 4. Redux Promise
5. Axios
What is React Router?
React Router is the standard routing library for React. It keeps your UI sync with the URL. it has a simple API with powerful features like Lazy code Loading, dynamic route matching and Location transition handling build right in. To know about react router you can go to this link “react-router”
What is Redux Thunk?
Redux Thunk is middleware, which allows you to write action creators that return a function instead of a action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. To know redux thunk more about, you can go to this link “redux-thunk”.
What is React Router Dom?
React Router includes three main packages:
1. react-router. This is the core package for the router.
2. react-router-dom. It contains the DOM bindings for React Router. In other words, the router components for websites.
3. react-router-native. It contains the React Native bindings for React Router. In other words, the router components for an app
development environment using React Native.
       
  Configure the Redux with React JS?
Create the Project and Install the react js related plugins
  1.
2.
3.
Command for `npm` is `npm install -g create-react-app`and Command for `yarn` is `yarn add global create-react-app`
Command for create project `create-react-app react-redux-sample`and go to the `cd react-redux-sample`
Then install the plugins for react redux by `npm install --save redux react-redux react-router-dom react-router-redux redux-thunk redux-promise axios history`
You can also find the Github sample project link: https://github.com/tariqulislam/react-redux-sample
 
  Create Combine Reducer for Redux Store
For Modular application and Large scale application we need multiple reducer to which are later combine by `combineReducer` redux function, this function consolidate the all the module wise reducer or seperate reducer to one.
In this project, i have create file at `src/core/` named `rootReducer.js` which will combine or consolidate separate module wise `reducer`.
import { combineReducers } from 'redux'
const rootReducer = combineReducers({ })
export default rootReducer
   
  Create Redux Store with Combine Reducer
Create redux store using redux, react redux, react router redux, redux promise, history.I have create the file at `src/core` named `store.js` which will contains code for `redux store`
  import { createStore, applyMiddleware, compose } from 'redux'
  import { routerMiddleware } from 'react-router-redux'
  import thunk from 'redux-thunk'
  import promise from 'redux-promise'
  import createHistory from 'history/createBrowserHistory'
  import rootReducer from './rootReducer'
  export const history = createHistory()
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
   
  Create the Reducers For Home Component
Then I have create file named `home.reducer.js` file at `src/reducers` directory at project which will contains `action constraint`, `actions`, `reducer` for `Home Component`, `state` for
1. Add the `action constraint` to `home.reducer.js` which will show and hide the paragraph of home page
     export const HIDE_HOME_INFO = 'HIDE_HOME_INFO'
     export const SHOW_HOME_INFO = 'SHOW_HOME_INFO'
2. Initialize the `state` of the `reducer` by:
     const initialState = {
        showInfo: false
}
3. Then add the action those action constraint.
     export const showParagraphInfo = () => {
        return dispatch => { dispatch({  type: SHOW_HOME_INFO })}
}
     export const hideParagraphInfo = () => {
        return dispatch => { dispatch({  type: HIDE_HOME_INFO })}
}
   
  Create the Reducers For Home Component
4. Create the Reducer for `Home Component` at `home.reducer.js` file
     export default (state= initialState, action) => {
        switch (action.type) {
  } }
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
5. Then change the code at `src/core/rootReducer.js` file and add `home.reducer` for combine and resolve the `home module reducer` to `redux store`
     import { combineReducers } from 'redux'
     import home  from '../reducers/Home/home.reducer'
     const rootReducer = combineReducers({  home})
     export default rootReducer
 
  Pass the Redux store and history to Main Component of Project
1. I use `{ Provider}` from `react-redux` , Using the `{ Router`}` from `react-router-dom` and also using `{ store }`, `history` from `src/core/store.js` file to connect and pass `redux store`, `redux reducer` to main `component` named `App` to `src/index.js` file. Change the ` change the `Dom Element` of the `ReactDOM` `render` function
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
<div> <App />
        </div>
      </Router>
      </Provider>
      , document.getElementById('root'));
      registerServiceWorker();
   
  Create `Home` Component for `Resolve Home Reducers
1. Create `Home` component at `src/components/Home.js` file at project
2. Import all dependency and reducer to connect with `redux` with `Home` react component
     import React, {Component} from 'react'
     import { push } from 'react-router-redux'
     import { bindActionCreators } from 'redux'
     import { connect } from 'react-redux'
● `{Component}` and `React` of `react` package help us to build the `React Component`.
● `{ push }` of `react-router-redux` package help to `route` from one component to another component
● `{ bindActionCreators }` of `redux` package provide the feature to mapping action with any UI `event` and also tigger
the `redux` action which are `declare` at `redux action`
● `{ connect}` is curry function of `react-redux` package, which will make connect with `reducer` of this component
● `connect(mapStateToProps, mapDispatchToProps)(<Component name>)`
● ` mapStateToProps`: which will map all the state between `redux reducer` and `component`
● `mapDispatchToProps`: which will map all the `dispatch` action with `component` UI’s `event`
● <Component Name> will take component name such as `Home`
   
  Home Component Design
 class Home extends Component {
   componentWillMount () {
        this.props.hideParagraphInfo()
}
render () {
       return (
        <div>
            Home Page
         </div>
) }
}
  ● I have extends the `React` `Component` Class to create `Home` Component
● `React Component` , we need `constructor` , `componentWillMount` , `componentDidMount` and `render` function
● `constructor`: constructor() If you don't initialize state and you don't bind methods, you don't need to implement a constructor for your React component. The constructor for aReact component is called before it is mounted
● `componentWillMount`: when the props and state are set, we finally enter the realm of Life Cycle methods. The first true life cycle method called is . This method is only called one time, which is before the initial render. Since this method is called before function., we can declare any `redux` `action` when component is loading.
● `componentDidMount`: componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
● To Render element using `render()` function. The render() function should be pure, meaning that it does not modify component state, it returns the same result each time it’s invoked, and it does not directly interact with the browser.
 componentWillMount()
 render()
 
  Home Component Connect to Redux Store
1. Add the Code in `render` Function to render Home Component
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
● `mapStateToPorps`: contains `showInfo` redux `state` which create the `mapping` through React Component to Redux Store
● `mapStateToProps`: which will contains `showParagraphInfo` , `hideParagraphInfo` and `goToAboutPage` redux function, which create mapping between `home.reducer` with `Home` component
● Then `connect` function connect `Home` component with Redux Store.
● `goToAboutPage1: () => push(‘/about-us’)` function change the route of the `component` and it will effect the `redux
store` of the `home` component and `about` component also.
   
  Add the Action and Redux Store State to `Home` Component at `render` function
     componentWillMount () {
            this.props.hideParagraphInfo()
}
● `this.props.hideParagraphInfo()` redux `action` call in `componentWilMount` to hide the paragraph of Home Page.
     render () {
           return ( <div>
                <h1> Home Page</h1>
                {!this.props.showInfo &&   <button onClick={() =>
     this.props.showParagraphInfo()}> Show Paragraph </button>}
                &nbsp; &nbsp;
                {this.props.showInfo && <button onClick={() =>
     this.props.hideParagraphInfo()}>Hide Paragraph</button>}
                { this.props.showInfo && <p> this is paragraph</p>}
                <button onClick={() => this.props.goToAboutPage()}> Go To About
     Page</button>
</div>
) }
● `this.props.showParagraphInfo()` redux `action` added in <button> `onClick` event to show the paragraph
● `!this.props.showInfo` will check the `redux store` provide the `showInfo` false, it will hide `Show Paragraph` button and `this.props.showInfo` is `redux store state` which helps react component to shows the paragraph at `Home component`
   
   Create the About Element to Check the Route of ‘react router` and `react router dom`
     import React from 'react'
     const  About = () => (
        <div>
            <h1> About Us</h1>
            <p> Hello World</p>
</div>
)
     export default About
  
  Add the `React Router` to `React Router Dom` route through `React Component`
import React, { Component } from 'react' import { Route, Link } from 'react-router-dom' import Home from './components/Home' import About from './components/About' import './assets/App.css';
class App extends Component {
render() { return (
<div className="App">
<header className='App-header'>
<Link to="/"> Home</Link>
<Link to="/about-us"> About </Link> </header>
<main>
<Route exact path="/" component={Home} />
<Route exact path="/about-us" component={About} /> </main>
</div>
export default App;
● Add the `{ Route, Link }` of `react-router-dom` package which has `React Router 4` functionality to router through the `react component` and make navigation of the application
● `<Link to="/"> Home</Link>` create the link option like <a> tag at `DOM`
● `<Route exact path="/" component={Home} /> ` this will create the route and `navigation` to `Home` component
● `<Route exact path="/about-us" component={About} />` this will create route and `navigation to `About` component.
  ); } }
 
  Run the Application and Test
● Run the application by `Yarn` or `npm` . For `Yarn` command `yarn start` and for `npm` command `npm start` Output:
● Home page output
● Click to Show Paragraph
● Click to Hide Paragraph
      
    
