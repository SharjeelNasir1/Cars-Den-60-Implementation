import React from "react";
import AddItems from "./AddItems";

const AddList = ({ adds, onDel }) => {
  const render = adds.map((add) => {
    return (
      <AddItems
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

export default AddList;
