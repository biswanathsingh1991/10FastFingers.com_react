import React, { Component } from 'react';
import {connect} from 'react-redux';

class Topranking extends Component{

  render(){
    return(
      <table class="table topranking">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">username</th>
            <th scope="col">WPM</th>
            <th scope="col">ago</th>
          </tr>
        </thead>
        <tbody>
          <tr>
              <th scope="row">1</th>
              <tb>biswanath</tb>
              <td class="user-img"> hi</td>
              <td class="wpm">wpm</td>
              <td class="ago">ii</td>
          </tr>
        </tbody>
      </table>

    );
  }
}

class Tasktaken extends Component{

  render(){
    return(
      <table class="table topranking">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">Username</th>
            <th scope="col">last 24h</th>
            <th scope="col">all</th>
          </tr>
        </thead>
        <tbody>
          <tr>
              <th scope="row">1</th>
              <tb></tb>
              <td class="user-img">Exterminator</td>
              <td class="wpm">206</td>
              <td class="ago">107823</td>
          </tr>
        </tbody>
      </table>
    );
  }
}


class Highsocrebox extends Component{

  state ={
    topranking : true,
    tasktane : false
  }

  render(){
    console.log(this.porps)
    return(
      <div >
        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
          <div className="btn-group " role="group">
              <button type="button" className="btn"><i class="fas fa-signal icn"></i></button>
              <button type="button" className="btn"><i class="fas fa-align-justify"></i></button>
              <button type="button" className="btn"><i class="fas fa-globe-asia"></i></button>
            </div>
        </div>
        {this.props.children}
        <div className="bg-white"><Tasktaken /></div>
        
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    highsocre: state.highsocre
  }

}


export default connect(mapStateToProps)(Highsocrebox);

export {
  Topranking
}