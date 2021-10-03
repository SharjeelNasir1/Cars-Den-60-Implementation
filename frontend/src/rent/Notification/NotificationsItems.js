import "./NotificationsItems.css";
import React from "react";
import { Link } from "react-router-dom";
// import { request } from "express";

const NotificationsItems = ({ request, accept, reject }) => {
  return (
    <div className="video-item item">
      {/* <Link to={`/rentadsdetails/${add._id}`}>

      </Link> */}
      {request.renterid.name}wants to requests your car{request.adid.carInfo}
      <button
        onClick={() => {
          accept(request);
        }}
      >
        Accept
      </button>
      <button
        onClick={() => {
          reject(request);
        }}
      >
        Reject
      </button>
    </div>
  );
};

export default NotificationsItems;
