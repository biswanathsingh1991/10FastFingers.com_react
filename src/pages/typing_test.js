import React, { Component } from 'react';
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Navlink from "../components/navlink";
import "../css/typing_test.css";
import Containbox from "../components/containbox";
import Typebox from "../components/typingbox"
import Footercmp from "../components/footercmp"


class Typingtest extends Component{
    state={
        navlink: "b-nav",
        contain_class: "typing_test--comp",
        typing_box_class: "typing--box"

    }


    render(){
        return(
            <div id="typing_test--main_container" >
                <Navbar />
                <div className="row container">
                    <div className="col-3" >
                    <Navlink props={this.state.navlink} />
                    </div>
                    <div className="col-8">
                        <Containbox contain_class = {this.state.contain_class} />
                        <Typebox />
                    </div>
                </div>
                <Footercmp />
            </div>
        );
    }
}



export default Typingtest;