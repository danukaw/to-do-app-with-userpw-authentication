import React from 'react';
import {connect} from 'react-redux';
//modules which were introduced
import ToDoList from 'ToDoList'
import AddTodo from 'AddTodo'
import ToDoSearch from 'ToDoSearch';
import * as actions from 'Actions';


export class ToDoApp extends React.Component{

  onLogout (e) {
    var {dispatch} = this.props;
    e.preventDefault();
    dispatch(actions.startLogout());
  }
  render() {
    var {dispatch} = this.props;

    return (
        <div>
          <div className="page-actions">
            <a href="#" onClick={this.onLogout.bind(this)}>Logout</a>
          </div>
          <h1 className="page-title">Todo App</h1>
          <div className="row">
            <div className="column small-centered small-11 medium-6 large-5" >
              <div className="container">
                <ToDoSearch/>
                <ToDoList/>
                <AddTodo/>
              </div>
            </div>
          </div>
        </div>
      );
  }

};

export default connect()(ToDoApp);

//module.exports = ToDoApp;
