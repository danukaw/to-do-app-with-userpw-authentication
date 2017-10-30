var React = require('react');
var {connect} = require('react-redux');
var actions = require('Actions');

export class AddTodo extends React.Component{

 onSubmit(e) {
   var {dispatch} = this.props;
   e.preventDefault();
   var toDo = this.refs.todo.value;

   if(toDo.length > 0) {
     console.log("todo ==> ", toDo);
     this.refs.todo.value = "";
     //this.props.onSetTodo(toDo);
     dispatch(actions.startAddToDo(toDo));
   } else {
      this.refs.todo.focus();
   }

 }

 render() {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="todo" placeholder="What Do you need to do"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }

}

export default connect()(AddTodo)
