import React, { Component } from 'react';
import "../css/loginbox.css";
import {connect} from 'react-redux';
import {authentication} from '../action';

class Loginbox extends Component{


  captureEmail = (e) =>{
    let username = e.target.value.split("@")[0];
    this.props.captureUserNameAction(username);
  }

  capturePassword = (e) =>{
    let password = e.target.value.trim();
    this.props.capturePassWordAction(password);
  }

  handelSubmit = (e, state) =>{
    e.preventDefault(); 
    this.props.authentication(this.props.username, this.props.password)
    
  }

  render(){
    return(
      <div id="loginbox" className="container-fluid ">
        <ul className="nav nav-tabs">
          <li></li>
          <li className="nav-item">
            <a className="nav-link active" href="/login">login</a>
          </li>
        </ul>
        <div className="row">
          <div className="col-4" id="login-btns">
              <h3 >1-Click-Login</h3>
              <hr/>
              <ul id="loginbox-socal">
                <li id="loginbox-facebook">
                  <a href="/account/facebook_login" className="social-login btn btn-primary facebook-btn-tb">
                    <i className="fab fa-facebook"></i>&nbsp; 
                    Facebook Login
                  </a></li>
                <li>
                  <a href="/account/twitter_login" className="social-login btn btn-primary twitter-btn-tb">
                    <i className="fab fa-twitter"></i>&nbsp; 
                    Twitter Login
                  </a>
                </li>
                <li>
                  <a href="/account/google_login" className="social-login btn btn-primary google-btn-tb">
                    <i className="fab fa-google"></i>&nbsp;
                    Google Login</a>
                </li>						
                </ul>
          </div>
          <form className="col-6 offset-1 " id="loginbox-form" onSubmit= { this.handelSubmit }>
            <h3>Email Login</h3>
            <hr/>
            <label htmlFor="UserEmail">Email</label>
            <input className="form-control" type="text" placeholder="Email"
            required="required" maxLength="60" id="UserEmail"
            onBlur={ this.captureEmail }/>
            <label htmlFor="password">Password</label>
            <input className="form-control" type="password"
            required="required" maxLength="60" id="password"
            onBlur={ this.capturePassword }/>
            <button type="submit" className="btn btn-info btn-block" >
              login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    captureUserNameAction: (username) => dispatch({type:"username", payload: username}),
    capturePassWordAction: (password) => dispatch({type:"password", payload: password}),
    authentication: (username, password) => dispatch(authentication(username, password)),

  }
}

const mapStateToProps = (state) =>{
  return{
    username: state.loginreducer.username,
    password: state.loginreducer.password,

  }
}


export default connect(mapStateToProps, mapDispatchToProps) (Loginbox);

