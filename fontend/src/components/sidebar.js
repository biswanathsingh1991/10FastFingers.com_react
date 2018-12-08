import React, { Component } from 'react';
import "../css/sidebar.css";
import Language from "./language";
import logo from "../media/img/logo@2x.png";
import Navlink from "./navlink"




class Sidebar extends Component{

    state={
        navlink: "t-nav"
    }
    render(){
        return(
            <div id="sidebar" >
                <img id="sidebar_logo" src={ logo } alt="https://cdn.10fastfingers.com/img/layout/logo%402x.png?1543505005"/>
                <Language />
                <Navlink navlink={this.state.navlink} />

                <button>Login | Register</button>
            </div>
        );
    }
}

export default Sidebar;