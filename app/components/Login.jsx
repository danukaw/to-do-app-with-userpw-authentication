import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'Actions';

export var Login = React.createClass({

  render () {

    var {dispatch} = this.props;

    return(
      <div>
        <h1 className="page-title">Todo App</h1>
        <div classsName="row">
          <div className="columns small-centered small-10 medium-6 large-4">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p> Login with GitHub account below </p>
              <button className="button" onClick={()=>{
                  dispatch(actions.startLogin());
                }}>Login With GitHub</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default connect()(Login);
