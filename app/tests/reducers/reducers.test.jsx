var expect = require('expect');
var reducers = require('Reducers');
var  moment = require('moment');

describe('Reducers', () => {

  it('should action should despatch to searchText reducer', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText : 'search some text'
    }

    var res = reducers.sarchTextReducer("", action);
    expect(res).toEqual(action.searchText);

  });

  it('should action should despatch to addTodoReducer', () => {

    var action = {
      type : 'ADD_TO_DO',
      text : 'pool cleaning'
    }

    var res = reducers.addTodoReducer([], action);
    expect(res[0].task).toEqual(action.text);

  });

  it('should action should despatch to toggletodo', () => {

    var todoList = [
      {
          "id" : "6b706880-9003-11e7-b082-b938a8523750",
          "task" : 'pool cleaning1',
          "completed" : true,
          "createdAt" : moment().unix(),
          "completedAt" : undefined
       }

    ];

    var action = {
      type : 'TOGGLE_TO_DO',
      id : "6b706880-9003-11e7-b082-b938a8523750"
    }

    var res = reducers.addTodoReducer(todoList, action);

    console.log("response" + res)

    expect(res[0].completed).toEqual(false);
    //expect(res[0].completedAt).toEqual(undefined);
  });



});
