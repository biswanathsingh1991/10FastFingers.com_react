import React, { Component } from 'react';
import {connect} from 'react-redux';

class Topranking extends Component{

  render(){
    return(
      <table className="table topranking">
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
              <td className="user-img"> hi</td>
              <td className="wpm">wpm</td>
              <td className="ago">ii</td>
          </tr>
        </tbody>
      </table>

    );
  }
}

class Tasktaken extends Component{

  render(){
    return(
      <table className="table topranking">
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
              <td></td>
              <td className="user-img">Exterminator</td>
              <td className="wpm">206</td>
              <td className="ago">107823</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

class Globalchallange extends Component{

  render(){
    return(
      <table className="table topranking">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">Language</th>
            <th scope="col">Tests taken</th>
          </tr>
        </thead>
        <tbody>
          <tr>
              <th scope="row">1</th>
              <td></td>
              <td className="user-img">English</td>
              <td className="wpm">169672</td>
          </tr>
        </tbody>
      </table>

    );
  }
}


class Highsocrebox extends Component{

  
  boxselect = (e) => {
    const [topranking, tasktane, globalchallage] = this.props.highsocre;
    if (e.target.value == "topranking"){
      topranking.topranking = true;
      tasktane.tasktane = false;
      globalchallage.globalchallage = false;
    }else if(e.target.value == "tasktane"){
      topranking.topranking = false;
      tasktane.tasktane = true;
      globalchallage.globalchallage = false;
    }else if(e.target.value == "globalchallage"){
      topranking.topranking = false;
      tasktane.tasktane = false;
      globalchallage.globalchallage = true;
    }
  }

  highsocreboxcmp = () => {
    const [topranking, tasktane, globalchallage] = this.props.highsocre;
    if(globalchallage.globalchallage){
      return(<Globalchallange />);
    }else if(tasktane.tasktane){
      return(<Tasktaken />);
    }else{
      return(<Topranking />);
    }
  }


  render(){
    console.log(this.props.highscore);
    return(
      <div >
        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
          <div className="btn-group " role="group">
              <button type="button" onClick={this.boxselect} value="topranking" className="btn"><i className="fas fa-signal icn"></i></button>
              <button type="button" onClick={this.boxselect} value="tasktane" className="btn"><i className="fas fa-align-justify"></i></button>
              <button type="button" onClick={this.boxselect} value="globalchallage" className="btn"><i className="fas fa-globe-asia"></i></button>
            </div>
        </div>
        {this.props.children}
        <div className="bg-white">{this.highsocreboxcmp()}</div>
        
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