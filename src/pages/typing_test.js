import React, { Component } from 'react';
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Navlink from "../components/navlink";
import "../css/typing_test.css"


class Typingtest extends Component{
    state={
        navlink: "b-nav"
    }


    render(){
        return(
            <div id="i" >
                <Navbar />
                <div className="row container">
                <div className="col-3" >
                <Navlink props={this.state.navlink} />
                </div>


                </div>



            </div>
        );
    }
}



export default Typingtest;