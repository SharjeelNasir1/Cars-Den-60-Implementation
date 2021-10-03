// import { request } from "express";
import React from "react";
import RentAdItems from "./RentAdItems";

const RentAdsList = ({ adds, request }) => {
  const render = adds.map((add) => {
    return <RentAdItems key={add._id} add={add} request={request} />;
  });
  return (
    <div>
      <div>
        <div className="ui relaxed divided list">{render}</div>
      </div>
    </div>
  );
};

export default RentAdsList;
