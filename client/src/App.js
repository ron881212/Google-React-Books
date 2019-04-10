import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from "./logo.svg";
import Search from './pages/search'
import Books from './pages/Books'
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        
        <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Books} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
