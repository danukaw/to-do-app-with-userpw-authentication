import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'Actions';
import firebase, {firebaseRef} from 'App/firebase';


export var Login = React.createClass({

  onSubmit() {
        var {dispatch} = this.props;
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
          'size': 'invisible',
          'callback': function(response) {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            console.log('reCAPTCHA solved, allow signInWithPhoneNumber.');
          }
        });
  },

  render () {

    return(
      <div>
        <h1 className="page-title">Todo App</h1>
        <div classsName="row">
          <div className="columns small-centered small-10 medium-6 large-4">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p> Login with GitHub account below </p>
              <button id="sign-in-button" className="button" onClick={this.onSubmit}>Login</button>
            </div>
          </div>
          <div className="columns small-centered small-10 medium-6 large-4">
            <div className="callout callout-auth">
              <h3>Sign Up</h3>
              <p> Login with UserName/Password</p>
              <button className="button" onClick={()=>{
                  dispatch(actions.startSignUp());
                }}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default connect()(Login);
