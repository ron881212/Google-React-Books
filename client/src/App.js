import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from "./logo.svg";
import Nav from './components/navBar'
import Hero from './components/hero'
import Search from './pages/search'
import Books from './pages/Books'
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Nav />
        <Hero />
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Books} />
        {/* <Search /> */}
      </div>
      </Router>
    );
  }
}

export default App;
