import React from "react";
import "./styles.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top mb-5 p-3">
    <ul className="navbar-nav">
        <li className="navbar-brand">
        Google Book Search
        </li>
        <li className="homePage">
        {/* this will be our home page component */}
        Search Books
        </li>
        <li className="savedPage">
        {/* this will be our saved page component */}
       Saved Books 
        </li>
    </ul>
    </nav>
  );
}

export default Nav;