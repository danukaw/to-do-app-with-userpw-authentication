var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var ToDoApp = require('ToDoApp');

describe('ToDoApp', () => {
  it('should exist', () => {
    expect(ToDoApp).toExist();
  });

  it('should add to todoList', ()=> {
    var newTodoText = "well tested";
    var todoApp = TestUtils.renderIntoDocument(<ToDoApp/>)

    todoApp.setState({
      todolist : []
    });

    todoApp.handleOnSetTodo(newTodoText);

    expect(todoApp.state.todolist[0].task).toBe(newTodoText);

    // Expect createdAt to be number

  });

  it('should completed toggle completed when handletoggle called', () => {

    var todolist = {
        "id" : 33,
        "task" : "check the pool",
        "completed" : false
    }
    var todoApp = TestUtils.renderIntoDocument(<ToDoApp/>);
    todoApp.setState({
      todolist : [todolist]
    });
    //check that todos first item has completed value of false
    expect(todoApp.state.todolist[0].completed).toBe(false);
    //call handletoggle with 11
    todoApp.handleOnToggle(33);
    // Verify that value change
    expect(todoApp.state.todolist[0].completed).toBe(true);
    //expect completedAt to be a number
  });
    // Test that when toggle from true to false, completed
});
