import React, { Component } from "react";
// import logo from "./logo.svg";
import Nav from './components/navBar'
import Search from './components/search'
import Hero from './components/hero'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
      <Nav />
      <Hero />
      <Search />
      </div>
    );
  }
}

export default App;
