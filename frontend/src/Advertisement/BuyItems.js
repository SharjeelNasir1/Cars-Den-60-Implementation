import "./BuyItems.css";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import Axios from "axios";
import { useHistory } from "react-router-dom";
const BuyItems = ({ add }) => {
  const value12 = useContext(UserContext);
  const history = useHistory();

  const handleMessage = async () => {
    console.log("ok1");

    const member1 = value12.userid;

    const member2 = add.userid;
    const postid = add._id;
    //console.log(this.state.post)
    const findconv = await Axios.get(
      `http://localhost:5000/conversations/find/${member1}/${member2}/${postid}`
    );
    console.log(findconv.data);

    if (findconv.data) {
      console.log("1");
      history.push({
        pathname: "/chat",
        state: { conversation: findconv.data },
      });
    } else {
      const title = add.carInfo;
      console.log(member1, member2);
      console.log("2");
      const newconv = await Axios.post("http://localhost:5000/conversations/", {
        senderId: member1,
        receiverId: member2,
        title: title,
        postid: postid,
      });
      history.push({
        pathname: "/chat",
      });
    }
  };

  return (
    <div className="video-item item">
      <Link to={`/buyadds/${add._id}`}>
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
            {add.userid}
          </div>
          <div> {add.descrip}</div>
        </div>
      </Link>
      <button onClick={handleMessage}>message</button>
    </div>
  );
};

export default BuyItems;
