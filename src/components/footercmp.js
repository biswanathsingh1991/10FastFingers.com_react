import React, { Component } from 'react';


const Footercp = (props)=>{
    return(
        console.log(this.porps.list);
        <ul className="list-group">
            this.porps.list.map(it=>{
                <li className="list-group-item" >it</li>
            });
           
        </ul>
    );
}


class Footercmp extends Component{
    state = {
        list: ["Twitter @10FastFingers_", "Supporter", "Impressum","Datenschutzerklärung / Privacy Policy",
                    "GDPR / DSGVO FAQ"]
    }


    render(){
        console.log(this.state.list);
        return(
            <footer className=" row " >
               <Footercp  list={this.state.list} />
            </footer>


        );
    }
}




export default Footercmp;