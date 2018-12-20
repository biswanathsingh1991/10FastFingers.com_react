import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchTxt} from '../action';

class Containbox extends Component{
  state={
  test_contain: "If you arent satisfied with the build tool and configuration choices you can eject at any time. This command will remove the"
  }
  componentDidMount(){
    this.props.TxtFatch()
  }

  render(){
    let txt_to_type = this.props.txt14 ? this.props.txt14.txt2 : null;
    return(
      <div id= { this.props.contain_class }>
        <p>{txt_to_type}</p> 
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