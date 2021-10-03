import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../UserContext";
import NotificationsList from "./NotificationsList";

function Notifications() {
  const value12 = useContext(UserContext);
  const [requests, setRequests] = useState([]);
  const [acceptRequests, setAcceptRequests] = useState([]);

  const getAcceptedData = (id) => {
    axios
      .get("http://localhost:5000/acceptnotifications/" + id)
      .then((response) => {
        console.log("Opened Renter Notifications: ", response.data);
        setAcceptRequests(response.data);
      })
      .catch(function (error) {
        console.log(error);
        console.log("Aey te error hai bro");
      });
  };

  const getRequestsData = (id) => {
    axios
      .get("http://localhost:5000/notifications/" + id)
      .then((response) => {
        console.log("Opened Leaser Profile Requests: ", response.data);
        setRequests(response.data);
      })
      .catch(function (error) {
        console.log(error);
        console.log("Aey te error hai bro");
      });
  };

  const accept = (request) => {
    console.log(request);
    axios.post("http://localhost:5000/sendacceptrequest/" + request._id);

    console.log(request);
  };

  const reject = (request) => {};
  useEffect(() => {
    if (value12.islogged) {
      console.log(
        " userid of user: ",
        value12.userid,
        " email of user: ",
        value12.email2
      );
    }
    getAcceptedData(value12.userid);
    getRequestsData(value12.userid);
  }, [value12.userid]);
  return (
    <div className="ui  container" style={{ marginTop: "10px" }}>
      <div className="ui grid">
        <div className="ui row">
          <div className="five wide column">
            <NotificationsList
              requests={requests}
              accept={accept}
              reject={reject}
              userid={value12.userid}
            />
            <NotificationsList
              requests={acceptRequests}
              accept={accept}
              reject={reject}
              userid={value12.userid}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Notifications;
