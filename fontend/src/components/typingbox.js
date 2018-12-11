import React, { Component } from 'react';
import "../css/typingbox.css"


class Typebox extends Component{


    render(){
        return(
            <div id="type--box">
                <div id="cnt">
                    <div id="cnt-1">
                        <input type="text" className="form-control  " />
                    </div>
                        <div id="ktr">
                        <div id="timer" >1:00</div>
                            <button className="fas fa-sync-alt " id="logo"></button>
                        </div>
                    
                </div>
                
            </div>
        );
    }
}

export default Typebox;