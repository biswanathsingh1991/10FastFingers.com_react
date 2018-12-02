import React, { Component } from 'react';

import "../css/sidebar.css";
import Language from "./language";
import logo from "../media/img/logo@2x.png"

class Sidebar extends Component{


    render(){
        return(
            <div id="sidebar" >
                <img id="sidebar_logo" src={ logo } alt="https://cdn.10fastfingers.com/img/layout/logo%402x.png?1543505005"/>
                <Language />
                <ul className="list-group ">
                    
                    <li className="list-group-item">
                        <a href=""><strong>Typing Test</strong><br/><small>Top 2000 words</small></a>
                    </li>
                    <li className="list-group-item"><storng>Advance Test</storng><br/><small>Top 1000 words</small></li>
                    <li className="list-group-item"><strong>Custom Typing Test</strong><br/><small>Create your own</small></li>
                    <li className="list-group-item"><strong>Typing Competition</strong> <br/> <small>Who can type faster?</small></li>
                    <li className="list-group-item"><strong>Text Practice</strong> <br/> <small>Practice your own text</small></li>
                    <li className="list-group-item"><strong>Top 1000</strong><br/> <small>Challenge yourself</small></li>

                </ul>
                <button>Login | Register</button>
            </div>
        );
    }3
}

export default Sidebar;