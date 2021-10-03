import axios from "axios";
import React, { useEffect, useState } from "react";
import BuyList from "./BuyList";
function Buy() {
  const [data, setData] = useState([]);

  const getData = async () => {
    await axios
      .get("http://localhost:5000/myadds")
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

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="ui  container" style={{ marginTop: "10px" }}>
      <div className="ui grid">
        <div className="ui row">
          <div className="five wide column">
            <BuyList adds={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Buy;
