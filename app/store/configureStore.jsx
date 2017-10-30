//var redux = require('redux');
import * as redux from 'redux';
import thunk from 'redux-thunk';
//var thunk = require('redux-thunk').default;
import {sarchTextReducer, showCompltedReducer, addTodoReducer, authReducer} from 'Reducers';

export var configStore = (initialState = {"searchText": "default search text", "showCompleted" : false }) => {
  // combineReducers
  var reducers = redux.combineReducers({
    searchText : sarchTextReducer,
    showCompleted : showCompltedReducer,
    todolist : addTodoReducer,
    auth : authReducer
  });

  var store = redux.createStore(reducers, initialState, redux.compose(
      //redux.applyMiddleware(thunk),
      redux.applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
