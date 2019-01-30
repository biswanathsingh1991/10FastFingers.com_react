import React, { Component } from 'react';
import {connect} from 'react-redux';
import propic from "../media/img/default_propic.png";
import {fatchUserId} from "../action/userdetail_action"

class UserDetailBox extends Component{
  
  componentDidMount(){
    this.props.fatchUserId(this.props.token);
  }

	render(){
		return(
								<div className="">
                  <p>
                    <img src={ propic } width="120" height="120" id="propic-sidetxt"/>
                    Edit your description under "settings"
                    Let us know a little bit about yourself and what your typing goals are :)
                  </p>
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">User details</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">User ID</th>
                        <td>1740479</td>
                      </tr>
                      <tr>
                        <th scope="row">last login</th>
                        <td> 	4 seconds ago</td>
                      </tr>
                      <tr>
                        <th scope="row">member since</th>
                        <td>15 hours, 2 minutes ago</td>
                      </tr>
                      <tr>
                        <th scope="row">Keyboard Layout</th>
                        <td>nothing</td>
                      </tr>
                      <tr>
                        <th scope="row">Keyboard</th>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope="row">Words typed</th>
                        <td>0</td>
                      </tr>
                      <tr>
                        <th scope="row">Tests taken</th>
                        <td>0</td>
                      </tr>
                      <tr>
                        <th scope="row">Competitions taken</th>
                        <td>0</td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-secondary">Visitors</button>
                    <button type="button" class="btn btn-secondary">Activity</button>
                    <button type="button" class="btn btn-secondary">Recent Competition</button>
                  </div>
                </div>
			);
	}
}


const mapStateToProps = (state) =>{
  return{
    token: state.loginreducer.key
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    fatchUserId: (token) => {dispatch(fatchUserId(token))}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserDetailBox);
