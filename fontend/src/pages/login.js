import React, { Component } from 'react';
import Navbar from "../components/navbar";
import {Navlink2} from "../components/navlink";
import "../css/pages.css"
import Loginbox from "../components/loginbox"
import Footercmp from "../components/footercmp";
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Login extends Component{

  render(){
    
    return(
    //   this.props.key ?
    //   <Redirect to={{
    //     pathname: "/userprofile",
    //   }}/>
    // :
      <div> 
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
          <Navlink2 />
          <a href="/login" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">
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
const mapDispatchToProps = (dispatch) =>{
}

const mapStateToProps = (state) =>{
  return{
    key: state.loginreducer.key,
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Login);