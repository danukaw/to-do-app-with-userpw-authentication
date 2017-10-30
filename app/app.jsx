var React = require('react');
var ReactDOM = require('react-dom');
// Greeter React component -- container component

var {Provider} = require('react-redux');
var {hashHistory} = require('react-router');
var actions = require('Actions');

import firebase from 'App/firebase';
import Navigation from 'App/route';
//import './../playground/firebase/index';

var store = require('configureStore').configStore();

/*store.subscribe(() => {
    var state = store.getState();
    console.log(" New Status " + state);
    TodoAPI.setTodos(state.todolist);
});
*/

/*var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addToDos(initialTodos));
*/
//store.dispatch(actions.startAddTodos());

$(document).foundation();
require('style!css!sass!ApplicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <Navigation/>
  </Provider>,
  document.getElementById('app')
);
