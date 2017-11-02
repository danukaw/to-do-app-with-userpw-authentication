import React from 'react';
import firebase from 'App/firebase';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import actions from  'Actions';
import Login from 'Login';
import ToDoApp from 'ToDoApp';

export class Navigation extends React.Component{

  loginRequired (nextState, replace, next) {
    if (!firebase.auth().currentUser) {
      replace('/')
    }
    next();
  }

  redirectIfLoggedIn (nextState, replace, next) {
    if (firebase.auth().currentUser) {
      replace('/todos');
    }
    next();
  }

  render () {
    return (
      <Router history={hashHistory}>
        <route path="/">
          <route path="todos" component={ToDoApp} onEnter={this.loginRequired.bind(this)}/>
          <IndexRoute component={Login} onEnter={this.redirectIfLoggedIn.bind(this)}/>
        </route>
      </Router>
    );
  }
};
export default Navigation;
