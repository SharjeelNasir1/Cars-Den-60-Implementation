import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import RentAdsList from "./RentAdsList";
import { UserContext } from "../../../UserContext";
function Rent() {
  const value12 = useContext(UserContext);
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("http://localhost:5000/renterads")
      .then((response) => {
        console.log("Here is the Data From Db", response.data);
        setData(response.data);
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
        console.log("Aey te error hai bro");
      });
  };

  const sendRequest = (request) => {
    console.log("Mashallah Kya Gari hai", request);
    console.log(request._id);
    console.log(request.userid);
    console.log(value12.userid);
    const body = {
      adid: request._id,
      renterid: value12.userid,
      leaserid: request.userid,
    };
    axios.post("http://localhost:5000/sendrequest", body);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="ui  container" style={{ marginTop: "10px" }}>
      <div className="ui grid">
        <div className="ui row">
          <div className="five wide column">
            <RentAdsList adds={data} request={sendRequest} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Rent;
