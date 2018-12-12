import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";



class Navlink extends Component{

    render(){
        return(
            <ul className="list-group " id={this.props.navlink}>
                <li className="list-group-item">
                    <Link to="/typing-test"><strong>Typing Test</strong><br/><small>Top 2000 words</small></Link>
                </li>
                <li className="list-group-item "><strong>Advance Test</strong><br/><small>Top 1000 words</small></li>
                <li className="list-group-item"><strong>Custom Typing Test</strong><br/><small>Create your own</small></li>
                <li className="list-group-item"><strong>Typing Competition</strong> <br/> <small>Who can type faster?</small></li>
                <li className="list-group-item"><strong>Text Practice</strong> <br/> <small>Practice your own text</small></li>
                <li className="list-group-item"><strong>Top 1000</strong><br/> <small>Challenge yourself</small></li>
                </ul>

        );
    }
}

export default Navlink;

