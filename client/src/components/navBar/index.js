import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top mb-5 p-3">
    <ul className="navbar-nav">
        <li className="navbar-brand">
        Google Book Search
        </li>
        <li className="homePage ml-5">
        <Link to="/">
          Search Books      
        </Link>
        </li>
        <li className="savedPage ml-5">
        <Link to="/saved">
          Saved Books 
        </Link>
        </li>
    </ul>
    </nav>
  );
}

export default Nav;