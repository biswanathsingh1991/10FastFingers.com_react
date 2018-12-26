import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Typingtest from "./pages/typing_test";
import Login from "./pages/login"

class App extends Component {
  render() {
    return (
    <BrowserRouter className="">
      <div className="App ">
        <Route exact path="/" component={ Home } /> 
        <Route path="/typing-test" component={ Typingtest } />
        <Route path="/login" component={ Login } />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
