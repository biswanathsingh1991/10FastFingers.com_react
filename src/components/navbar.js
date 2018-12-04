import React, { Component } from 'react';
import "../css/navbar.css";
import patreon from "../media/img/patreon.png";
import Language from "./language";

class Navbar extends Component{
    state={        
        language1 : [
            "English", "hindi"
        ],
    
        selected_language : "",
}

    render(){
        return(
            <div >
                <nav className="navbar  navbar_b navbar-expand">
                    <a href="#" className="navbar-brand"><img src="https://cdn.10fastfingers.com/img/layout/logo%402x.png?1543505005" alt=""/></a>  
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"><img src={ patreon } alt="https://10fastfingers.com/img/sonstiges/patreon.png?1543505005"/></li>
                        <li className="nav-item">Forum</li>
                        <li className="nav-item">Feedback</li>
                        <li className="nav-item">Contact</li>
                        <li className="nav-item">FAQ</li>
                        <li className="nav-item">Supporter</li>
                    </ul>
                </nav>
                <nav className="navbar  navbar_b navbar-expand">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"><Language language={ this.state.language1 } /></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;