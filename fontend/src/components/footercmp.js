import React, { Component } from 'react';
import "../css/footercmp.css"


const Footercp = (props)=>{

   const li_list = props.list.map(it=>{
        return(
            <li className="list-group-item ftr-ls" >{it}</li>
        );
        })
    return( 
        <ul className="list-group">
            {li_list}
        </ul>
    );
}


class Footercmp extends Component{
    state = {
        list1: ["Twitter @10FastFingers_", "Supporter", "Impressum","Datenschutzerklärung / Privacy Policy",
                    "GDPR / DSGVO FAQ"],
        list2:["Forum", "Translate 10FastFingers", "FAQ", "Typing Test", "Typing Achievements",
                "Speedtest Redesign - Workflow"]
    }

    render(){
        return(
            <footer className="ftr container-fluid" >
                <div className="row  ">
                    <div className="col-5  " >
                        <h3>About</h3>
                        <Footercp  list={this.state.list1} />
                    </div>
                    <div className="col-5 ">
                        <h3>Typig Test</h3>
                        <Footercp  list={this.state.list2} />
                    </div>
                </div>
            </footer>
        );
    }
}




export default Footercmp;