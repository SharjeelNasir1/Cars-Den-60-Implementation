import React from "react";
import MyLeasedAdsItems from "./MyLeasedAdsItems";

const MyLeasedAdsList = ({ adds, onDel }) => {
  const render = adds.map((add) => {
    return (
      <MyLeasedAdsItems
        key={add._id}
        add={add}
        onDel={onDel}
        // onAddSelect={onAddSelect}
      />
    );
  });
  return (
    <div>
      <div>
        <div className="ui relaxed divided list">{render}</div>
      </div>
    </div>
  );
};

export default MyLeasedAdsList;
