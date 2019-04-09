import React from "react";
import "./styles.css";

function Hero(props) {
  return (
    <div className="jumbotron mr-5 ml-5">
        <div className="container">
        <h1 className="display-4">Search For Books Here</h1>
        <p className="lead">Search here for your favorite books from the largest database of books.</p>
        </div>
    </div>
  );
}

export default Hero;