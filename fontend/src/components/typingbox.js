import React, { Component } from 'react';
import "../css/typingbox.css";
import {connect} from 'react-redux';
import TypingTimer from './counter'




class Typebox extends Component{
  
  render(){
    return(
      <div id="type--box">
        <div id="cnt">
          <div id="cnt-1"><input type="text" className="form-control" onChange={this.props.show_display}/></div>
          <div id="ktr">
            <div id="timer" >{ this.props.timer_display ? <TypingTimer /> : "1:00" }</div>
            <button className="fas fa-sync-alt " id="logo"></button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    timer_display: state.typingTimer.timer_display
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    show_display: () => dispatch({type:"show_display"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Typebox);