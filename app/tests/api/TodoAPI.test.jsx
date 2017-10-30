var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos to localStorage', () => {

      var todolist = [{
          "id" : 33,
          "task" : "check the pool",
          "completed" : false
      }]

      TodoAPI.setTodos(todolist);
      var actual = JSON.parse(localStorage.getItem('todos'));

      expect(todolist).toEqual(actual);
    });

  });

  describe('getTodos', () => {
    it('should get todos from local storage when valid todos were set', ()=>{

      var todolist = [{
          "id" : 33,
          "task" : "check the pool",
          "completed" : false
      }];

      TodoAPI.setTodos(todolist);

      var actual = TodoAPI.getTodos();

      expect(todolist).toEqual(actual);

    });
  });

  describe('filterTodos', () => {

    var todos = [
      {
        "id" : 33,
        "task" : "some text here",
        "completed" : false
      },
      {
        "id" : 34,
        "task" : "some text here",
        "completed" : true
      },
      {
        "id" : 34,
        "task" : "other other text here",
        "completed" : false
      }
    ];

    it('should return all todos which are not completed when showCompleted is set to false', () => {

    });

    it('should sort todoslist by completed status', () => {

    });

    it('should filter todos by search text', () => {
        var filteredList =TodoAPI.filterTodos(todos,true,'some');
        expect(filteredList.length).toBe(2);

    });

    it('should returns of todos by search text', () => {
      var filteredList =TodoAPI.filterTodos(todos,true,'');
      expect(filteredList.length).toBe(3);
    });
    
  });

});
