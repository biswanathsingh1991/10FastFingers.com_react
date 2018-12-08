import React, { Component } from 'react';



class Containbox extends Component{

    state={
        test_contain: "If you arent satisfied with the build tool and configuration choices you can eject at any time. This command will remove the"
        
    }

    render(){
        return(
            <div id= { this.props.contain_class }>
               <p>{this.state.test_contain}</p> 

            </div>
        );
    }

}

export default Containbox;
