import React, { Component } from 'react';







class Language extends Component{

    state={        
        language1 : [
            "English", "hindi"
        ],
    
        selected_language : "",
    }


    selection = (e) =>{
        e.preventDefault();
        e.target.parentElement.previousSibling.innerHTML = "Language " + e.target.innerHTML
        
    }
    
    render(){
        const lan_list = this.state.language1.map(element=>{
            return(<a href="" className="dropdown-item" onClick={ this.selection } key={element}>{element}</a>);

        });
        return(
            <div className="dropdown">
                <button className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" >language </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" >
                    { lan_list }
                </div>
            </div>
        );
    }
}





export default Language;