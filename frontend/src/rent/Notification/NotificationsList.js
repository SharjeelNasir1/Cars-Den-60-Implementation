// import { request } from "express";
import React from "react";
import NotificationsItems from "./NotificationsItems";
import AcceptsItems from "./AcceptsItems";

const NotificationsList = ({ requests, accept, reject, userid }) => {
  const render = requests.map((request) => {
    return request.status == "Accept" && request.leaserid != userid ? (
      <AcceptsItems key={request._id} request={request} />
    ) : (
      <NotificationsItems
        key={request._id}
        request={request}
        accept={accept}
        reject={reject}
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

export default NotificationsList;
