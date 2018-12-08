import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter, Route } from "react-router-dom";
import Language from "./components/language";
import Home from "./pages/home";
import Typingtest from "./pages/typing_test";


class App extends Component {
  render() {
    return (
    <BrowserRouter className="">
      <div className="App ">
        <Route exact path="/" component={ Home } /> 
        <Route path="/typing-test" component={ Typingtest } />

      </div>
    </BrowserRouter>
    );
  }
}

export default App;
