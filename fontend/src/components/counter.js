import React, { Component } from 'react';
import {connect} from 'react-redux'



class TypingTimer extends Component{

  componentDidMount(){
    this.timeInterval()
  }

  timeInterval = () =>{
    setInterval(this.props.typingTimer_dispatch, 1000)
  }

  render(){

    console.log(typeof this.props.typingTimerValue)
    return(
      <div>{this.props.typingTimerValue}</div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    typingTimerValue : state.typingTimer.time
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    typingTimer_dispatch : () => dispatch({type:"typingTimer"})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TypingTimer);