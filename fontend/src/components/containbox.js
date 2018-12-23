import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchTxt} from '../action';

class Containbox extends Component{
  
  componentDidMount(){
    this.props.TxtFatch()
  }
  
  typingTextYesCondition = (ip) =>{
    let ip_array = ip.split(" ");
    let new_ip_array = ip_array.map(u => {
      return(<span key={u- ip_array.indexOf(u)}>{u}</span>);
    });
    return new_ip_array
  }

  typingText = () =>{
    // let txt_to_type = this.props.txt14 ? this.props.txt14.txt2 : null;
    let txt_to_type = this.props.txt14 ? 
    this.typingTextYesCondition(this.props.txt14.txt2) : null;
    return(
      txt_to_type
    );
  }
  
  render(){
    return(
      <div id= { this.props.contain_class }>
        <p>{this.typingText()}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    txt14 : state.containerTxt.txt
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    TxtFatch: () => {dispatch(fetchTxt())}
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Containbox);