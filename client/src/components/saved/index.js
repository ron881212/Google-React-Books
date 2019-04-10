import React from "react";
import "./styles.css";

function Saved(props) {
  return (
    <div className="card mb-3">
    <div className="card-body">
        <img className="card-img-top picture float-left mr-3 mb-3" src={props.image} alt={props.title}/>
        <p className="card-text" id="discription">{props.description}</p>
    
        <h5 className="card-title">{props.title}</h5>
        <h5 className="card-title">{props.author}</h5>
        <a href={props.buy} className="btn btn-primary mr-2">View</a>
        <a onClick={props.delete} className="btn btn-danger">Delete</a>
    </div>
    </div>
  );
}

export default Saved;