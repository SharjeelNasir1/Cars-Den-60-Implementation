import "./AcceptsItems.css";
import React from "react";
import { Link } from "react-router-dom";
// import { request } from "express";

const AcceptsItems = ({ request }) => {
  return (
    <div className="video-item item">
      {/* <Link to={`/rentadsdetails/${add._id}`}>

      </Link> */}
      {request.leaserid.name} has accpted your request to rent the car
      {request.adid.carInfo}
    </div>
  );
};

export default AcceptsItems;
