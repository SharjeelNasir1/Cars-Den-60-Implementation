import "./AddItems.css";
import React from "react";
import { Link } from "react-router-dom";

const AddItems = ({ add, onDel }) => {
  return (
    <div className="video-item item">
      <Link to={`/add/${add._id}`}>
        <div>
          {console.log(add.photo)}
          {add.photo === "" || add.photo === undefined ? (
            "Not Found"
          ) : (
            <img
              className="img-thumbnail click"
              alt="check"
              width={100}
              height={100}
              src={`data:${add.photoType};charset=utf8;base64,${Buffer.from(
                add.photo
              ).toString("ascii")}`}
            />
          )}
        </div>
        <div className="content">
          <div className="header">
            {add.car} {add.carInfo} {add.city}
          </div>
          <div> {add.descrip}</div>
        </div>
      </Link>
      <button onClick={() => onDel(add)}>Delete</button>
      <Link to={`/editselladds/${add._id}`}>
        <button>Edit</button>
      </Link>
    </div>
  );
};

export default AddItems;
