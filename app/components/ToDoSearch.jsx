var React = require('react');
var {connect} = require('react-redux');
var actions = require('Actions');

export class ToDoSearch extends React.Component {

/*  handleSearch : function () {

    var {dispatch} = this.props;
    var toDoSearch = this.refs.todosearch.value;
    var completedTodos = this.refs.showCompleted.checked;

     //this.props.onSearch(toDoSearch, completedTodos);
     dispatch(actions.setSearchText(toDoSearch));
     dispatch(actions.showToggleCompleted(completedTodos));
  },
*/



  render() {

    var {dispatch, searchText, showCompleted} = this.props;

    return(
      <div className="container__header">
        <div>
          <input type="search" ref="todosearch" value = {searchText} placeholder="Search todos..." onChange={() => {
              var toDoSearch = this.refs.todosearch.value;
               dispatch(actions.setSearchText(toDoSearch));
            }}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
                var completedTodos = this.refs.showCompleted.checked;
                dispatch(actions.showToggleCompleted());
              }}/> Show completed todos
          </label>
        </div>
      </div>
    );
  }

}

export default connect((state) =>  {
  return {
    searchText : state.searchText,
    showCompleted : state.showCompleted
  }
})(ToDoSearch);
