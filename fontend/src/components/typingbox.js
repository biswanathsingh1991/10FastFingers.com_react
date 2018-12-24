import React, { Component } from 'react';
import "../css/typingbox.css";
import {connect} from 'react-redux';
import TypingTimer from './counter'




class Typebox extends Component{

  constructor(){
    super()
    // this.state.txt_array = this.props.container_string.txt2.split(" ")
    // this.state.t ="working"
  }


  typeboxInputOnChange = (e) =>{
    let input_key = e.key;
    if (input_key===" "){
      this.props.typeboxInputSpace();
      // if (this.state.text_array[need_to_type_string_index]===this.props.current_string){
      //   this.props.string_match();
      // }else{
      //   this.props.string_match();
      // }
      e.target.value = "";
    }else{
      this.props.typeboxInputString(input_key);
    }
  }
  
  render(){
    // console.log(this.props.container_string)
    return(
      <div id="type--box">
        <div id="cnt">
          <div id="cnt-1">
            <input type="text" className="form-control" onKeyPress={this.typeboxInputOnChange} 
            onInput={this.props.show_display} />
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
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    show_display: () => dispatch({type:"show_display"}),
    typeboxInputString: (input_key) => dispatch({
      type:"Input value", data: input_key }),
    typeboxInputSpace: () => dispatch({type: "Input space"}),
    // WordNeedToType: () => dispatch({type:})
    string_match: () => dispatch({type: "matche"}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Typebox);