import React from 'react';
import firebase from 'App/firebase';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import actions from  'Actions';
import Login from 'Login';
import ToDoApp from 'ToDoApp';

export class Navigation extends React.Component{

  render () {
    return (
      <Router history={hashHistory}>
        <route path="/">
          <route path="todos" component={ToDoApp}/>
          <IndexRoute component={Login}/>
        </route>
      </Router>
    );
  }
};
export default Navigation;
