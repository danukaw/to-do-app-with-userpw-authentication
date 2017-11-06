import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'Actions';
import firebase, {firebaseRef} from 'App/firebase';


export var Login = React.createClass({

  getInitialState(){
      return {
          isShown : false
      };
  },

  onSubmit() {
        var {dispatch} = this.props;
        var that = this

        window.recaptchaVerifier = new  firebase.auth.RecaptchaVerifier('sign-in-button', {
          'size': 'invisible',
          'callback': function(response) {
            //console.log('reCAPTCHA solved, allow signInWithPhoneNumber.', response);
            that.setState({
                isShown : true
            });
          }
        });
        var phoneNumber = '+94772325534';
        var appVerifier = window.recaptchaVerifier;
        dispatch(actions.startLogin(phoneNumber, window.recaptchaVerifier));
  },


  handleVerify() {
    var code = this.refs.code.value;
    console.log(code);
    window.confirmationResult.confirm(code).then(function (result) {
  // User signed in successfully.
      var user = result.user;
      console.log(user);
      // ...
    }).catch(function (error) {
      // User couldn't sign in (bad verification code?)
      // ...
      console.log(error);
    });
  },

  render () {

    var {isShown} = this.state;
    var that = this;

    console.log(isShown);

    function confirmCode() {
      if(isShown) {
        return <div id="con_id"> <input type="text" ref="code" placeholder="verificaion code"/> <button onClick={that.handleVerify} className="button">Confirm</button> </div>;
      }
    }

    return(
      <div>
        <h1 className="page-title">Todo App</h1>
        <div classsName="row">
          <div className="columns small-centered small-10 medium-6 large-4">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p> Login with Mobile </p>
              <button id="sign-in-button" className="button" onClick={this.onSubmit}>Login</button>
            </div>
            {confirmCode()}
          </div>
        </div>
      </div>
    );
  }
});

export default connect()(Login);
