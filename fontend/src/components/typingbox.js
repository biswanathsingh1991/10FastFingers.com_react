import React, { Component } from 'react';
import "../css/typingbox.css";
import {connect} from 'react-redux';
import TypingTimer from './counter'




class Typebox extends Component{


  typeboxInputOnChange = (e) =>{
    let input_key = e.key;
    if (input_key===" "){
      this.props.typeboxInputSpace();
      if (this.props.containerTxt_array[this.props.need_to_type_string_index]===this.props.current_string){
        this.props.string_match(this.props.containerTxt_array[this.props.need_to_type_string_index]);
      }else{
        this.props.reset_string_match(this.props.containerTxt_array[this.props.need_to_type_string_index])
      }
      this.props.need_to_type_string_index_update();
      e.target.value = "";
    }else{
      this.props.typeboxInputString(input_key);
    }
  }

  wordMatch = (e) =>{
    let container_string_array = this.props.container_string.txt2.split(" ");
    this.props.sotreContainerTxtAsarray(container_string_array);
  }

  
  
  render(){
    return(
      <div id="type--box">
        <div id="cnt">
          <div id="cnt-1">
            <input type="text" className="form-control" onKeyPress={this.typeboxInputOnChange} 
            onInput={this.props.show_display} onFocus={this.wordMatch} />
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
    current_string: state.typingBoxInputTrack.current_string,
    container_string : state.containerTxt.txt,
    need_to_type_string_index: state.typingBoxInputTrack.need_to_type_string_index,
    containerTxt_array: state.typingBoxInputTrack.containerTxt_array,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    show_display: () => dispatch({type:"show_display"}),
    typeboxInputString: (input_key) => dispatch({
      type:"Input value", data: input_key }),
    typeboxInputSpace: () => dispatch({type: "Input space"}),
    string_match: (key) => dispatch({type: "matche", data: key}),
    sotreContainerTxtAsarray: (arrayData) => dispatch({type:"covert to array", data: arrayData }),
    need_to_type_string_index_update: () => dispatch({type: "update index"}),
    reset_string_match: (key) => dispatch({type: "not matche", data:key})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Typebox);