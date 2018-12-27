import React, { Component } from 'react';
import Navbar from "../components/navbar";
import Navlink from "../components/navlink";
import Footercmp from "../components/footercmp";
import propic from "../media/img/default_propic.png"


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