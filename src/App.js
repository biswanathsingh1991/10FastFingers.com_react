import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/navbar';
import Language from "./components/language"
import Home from "./pages/home"

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Home />
      </div>
    );
  }
}

export default App;
