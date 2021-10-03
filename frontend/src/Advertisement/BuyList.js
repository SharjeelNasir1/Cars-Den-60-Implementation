import React from "react";
import BuyItems from "./BuyItems";

const BuyList = ({ adds }) => {
  const render = adds.map((add) => {
    return <BuyItems key={add._id} add={add} />;
  });
  return (
    <div>
      <div>
        <div className="ui relaxed divided list">{render}</div>
      </div>
    </div>
  );
};

export default BuyList;
