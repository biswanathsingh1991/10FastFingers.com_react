import React, { Component } from 'react';
import Navbar from "../components/navbar";
import Navlink from "../components/navlink";
import Footercmp from "../components/footercmp";
import propic from "../media/img/default_propic.png";
import UserDetailBox from "../components/user_detail_box";

class  ProfilePage extends Component{

  render(){
    return(
      <div id="profilepage">
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
            <Navlink />
            </div>
            <div className="col-10" id="profilepage-user-display">
              <div class="btn-group" role="group" aria-label="Basic example">
                <h2>User: Legendery Biswa </h2>
                <button type="button" class="btn mx-2">settings</button>
                <button type="button" class="btn mx-2 ">Email setting</button>
                <button type="button" class="btn btn-success mx-2">Become a Suppoter</button>
              </div>
              <div className="row">
                <div className="col-5">
                  <UserDetailBox />
                </div>
                <div className="col-7">
                  <h3>Achievements</h3>
                  <hr/>
                  <div className="lock-icon">
                    <p>Typing Test</p>
                    <i class="fas fa-lock fa-3x"></i>
                    <i class="fas fa-lock fa-3x"></i>
                    <i class="fas fa-lock fa-3x"></i>
                    <i class="fas fa-lock fa-3x"></i>
                    <i class="fas fa-lock fa-3x"></i>
                    <i class="fas fa-lock fa-3x"></i>
                    <i class="fas fa-lock fa-3x"></i>
                    <i class="fas fa-lock fa-3x"></i>
                    <i class="fas fa-lock fa-3x"></i>
                    <i class="fas fa-lock fa-3x"></i>
                    <i class="fas fa-lock fa-3x"></i>
                    <i class="fas fa-lock fa-3x"></i>
                    <i class="fas fa-lock fa-3x"></i>
                    <i class="fas fa-lock fa-3x"></i>
                    <i class="fas fa-lock fa-3x"></i>
                    <i class="fas fa-lock fa-3x"></i>
                  </div>
                  <div className="lock-icon">
                    <p>Typing Competition</p>
                    <i class="fas fa-lock fa-3x"></i>
                    <i class="fas fa-lock fa-3x"></i>
                    <i class="fas fa-lock fa-3x"></i>
                    <i class="fas fa-lock fa-3x"></i>
                    <i class="fas fa-lock fa-3x"></i>
                    <i class="fas fa-lock fa-3x"></i>
                    <i class="fas fa-lock fa-3x"></i>
                    <i class="fas fa-lock fa-3x"></i>
                    <i class="fas fa-lock fa-3x"></i>
                    <i class="fas fa-lock fa-3x"></i>
                    <i class="fas fa-lock fa-3x"></i>
                    <i class="fas fa-lock fa-3x"></i>
                    <i class="fas fa-lock fa-3x"></i>
                    <i class="fas fa-lock fa-3x"></i>
                    <i class="fas fa-lock fa-3x"></i>
                    <i class="fas fa-lock fa-3x"></i>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <Footercmp />
      </div>
    );
  }
}


export default ProfilePage;