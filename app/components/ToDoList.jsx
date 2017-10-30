var React = require('react');
import ToDo from 'ToDo';
var {connect} = require('react-redux');
var TodoAPI =  require('TodoAPI');

//ES6 destructuring.
export class ToDoList extends React.Component{

  render() {

    var {todolist, searchText, showCompleted} = this.props;

    var renderToDoList = () => {

        var filteredTods = TodoAPI.filterTodos(todolist,showCompleted,searchText);

        if(filteredTods.length === 0 ) {
        return(
          <p className="container__message">Nothing To Do</p>
        );
      }
      return filteredTods.map((todo) => {
         return (
            <ToDo key={todo.id} {...todo} />
          );
        });
    };

    return(
      <div>
        {renderToDoList()}
      </div>

    );
  }

};
export default connect(
  (state)=>{
    return state;
})(ToDoList);
