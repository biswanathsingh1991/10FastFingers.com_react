import React, { Component } from 'react';
import "../css/loginbox.css";


class Loginbox extends Component{

  render(){
    return(
      <div id="loginbox" className="container-fluid ">
        <ul className="nav nav-tabs">
          <li></li>
          <li className="nav-item">
            <a class="nav-link active" href="/login">login</a>
          </li>
        </ul>
        <div className="row">
          <div class="col-4" id="login-btns">
              <h3 >1-Click-Login</h3>
              <hr/>
              <ul id="loginbox-socal">
                <li id="loginbox-facebook">
                  <a href="/account/facebook_login" className="social-login btn btn-primary facebook-btn-tb" id="">
                    <i className="fab fa-facebook"></i>&nbsp; 
                    Facebook Login
                  </a></li>
                <li>
                  <a href="/account/twitter_login" className="social-login btn btn-primary twitter-btn-tb" id="">
                    <i className="fab fa-twitter"></i>&nbsp; 
                    Twitter Login
                  </a>
                </li>
                <li>
                  <a href="/account/google_login" className="social-login btn btn-primary google-btn-tb" id="">
                    <i class="fab fa-google"></i>&nbsp;
                    Google Login</a>
                </li>						
                </ul>
          </div>
          <form className="col-6 offset-1 " id="loginbox-form">
            <h3>Email Login</h3>
            <hr/>
            <label htmlFor="UserEmail">Email</label>
            <input className="form-control" type="text" placeholder="Email"
            required="required" maxlength="60" id="UserEmail"
            />
            <label htmlFor="UserPassword">Password</label>
            <input className="form-control" type="text"
            required="required" maxlength="60" id="UserPassword"
            />
            <button type="submit" className="btn btn-info btn-block">login</button>
          </form>
        </div>
      </div>
    );
  }
}



export default Loginbox;

