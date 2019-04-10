import React from "react";
import "./styles.css";

function Searched(props) {
  return (
    <div className="card mb-3">
    <div className="card-body">
        <img className="card-img-top picture mr-3 mb-3" id="floatMe" src={props.image} alt={props.title}/>
        <p className="card-text" id="discription">{props.description}</p>
    
        <h5 className="card-title">{props.title}</h5>
        <h5 className="card-title">{props.author}</h5>
        <p className="card-text">{props.link}</p>
        <a href={props.buy} className="btn btn-primary mr-2">View</a>
        <a onClick={(event) => props.post(event)} className="btn btn-success">Save</a>
    </div>
    </div>
  );
}

export default Searched;