var uuidv1 = require('uuid/v1');
var $ = require('jquery');

var TodoAPI = {

  getTodos : function () {

    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try{
      todos = JSON.parse(stringTodos);
    }catch (e) {

    }

    return $.isArray(todos) ? todos : [];

  },

  setTodos : function (todos) {

    if($.isArray(todos)) {
      localStorage.setItem('todos',JSON.stringify(todos));
      return todos
    }

  },

  filterTodos : function (todos, showCompleted, searchText) {
    var filteredTodo = todos;
    // filter by showcompleted
    filteredTodo = filteredTodo.filter((todo)=>{
        return !todo.completed || showCompleted
    });
    // filter by searchText
    filteredTodo = filteredTodo.filter((todo)=>{
        var toDoText = todo.task.toLowerCase();
        /**if (todo.task.indexOf(searcTextLowerCase) >= 0) {
          return todo;
        }**/
        return searchText.length === 0 || toDoText.indexOf(searchText) >= 0;

    });


    //sort todos with no-completed firtst
    filteredTodo.sort((a, b)=> {
      if(!a.completed && b.completed) {
        return -1;
      } else if(a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });


    return filteredTodo;
  }
};

module.exports = TodoAPI;
