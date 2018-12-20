import React, { Component } from 'react';
import "../css/typingbox.css";
import {connect} from 'react-redux';
import {timerInit} from '../action';

class Typebox extends Component{
  
  constructor(props){
    super(props);
    this.props.timerinit()

  }

  // componentDidMount(){
  //   this.props.timerinit()
  // }

  render(){
    let k = this.props.init_timer ? this.props.init_timer : null;
    console.log(k)
    return(
      <div id="type--box">
        <div id="cnt">
          <div id="cnt-1"><input type="text" className="form-control" /></div>
          <div id="ktr">
            <div id="timer" >1{this.props.init_timer}</div>
            <button className="fas fa-sync-alt " id="logo"></button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    init_timer : state.init_timer
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    timerinit : () => dispatch({type:"timerinit"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Typebox);