import React from "react";

import { Switch, Route, Redirect } from "react-router";

import { useHistory } from "react-router-dom";
//import { Button,Jumbotron } from 'react-bootstrap';

const Card = (props) => {
  let history = useHistory();
  const openCard = (title) => {
    console.log(title);
    history.push("/card/" + title);
  };
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div class="card">
          <img src={props.imgsrc} class="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">{props.sname}</p>
            <button onClick={() => openCard(props.btname)}>
              {props.btname}{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
