import React, { Component } from 'react';
import Navbar from "../components/navbar";
import {Navlink2} from "../components/navlink";
import "../css/pages.css"
import Loginbox from "../components/loginbox"
import Footercmp from "../components/footercmp";


class Login extends Component{

  render(){
    return(
      <div id="login">
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <Navlink2 />
              <a href="/login" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">
                login
              </a>
            </div>
            <div className="col-7">
              <Loginbox />  
            </div>
          </div>
        </div>
        <Footercmp />
      </div>
    );
  }
}


export default Login