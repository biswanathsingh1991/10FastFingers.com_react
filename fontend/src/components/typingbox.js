import React, { Component } from 'react';
import "../css/typingbox.css";
import {connect} from 'react-redux';
import TypingTimer from './counter'


// const TypeBoxInputField = () =>{
//   return(
//     <input type="text" className="form-control" onKeyPress={this.typeboxInputOnChange} 
//     onInput={this.props.show_display}/>
//   );
// }

class Typebox extends Component{

  typeboxInputOnChange = (e) =>{
    let input_value = e.target.value;
    let input_key = e.key;
    if (input_key===" "){
      this.props.typeboxInputSpace();
    }else{
      this.props.typeboxInputString(input_value);
    }
  }


  
  render(){
    return(
      <div id="type--box">
        <div id="cnt">
          <div id="cnt-1">
            {/* {this.props.space_enter ? this.typeBoxInputField() : this.typeBoxInputField()} */}


            <input type="text" className="form-control" onKeyPress={this.typeboxInputOnChange} 
            onInput={this.props.show_display} value=""/>
          </div>
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
    timer_display: state.typingTimer.timer_display,
    space_enter: state.typingBoxInputTrack.input_space,
    current_string: state.typingBoxInputTrack.current_string
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    show_display: () => dispatch({type:"show_display"}),
    typeboxInputString: (value) => dispatch({
      type:"Input value", data: value }),
    typeboxInputSpace: () => dispatch({type: "Input space"}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Typebox);