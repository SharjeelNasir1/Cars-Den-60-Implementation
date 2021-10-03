import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../UserContext";
import AddList from "./AddList";

function MyAdds() {
  const value12 = useContext(UserContext);
  const [data, setData] = useState([]);

  const getData = (id) => {
    axios
      .get("http://localhost:5000/add/" + id)
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
    if (value12.islogged) {
      console.log(
        " userid of user: ",
        value12.userid,
        " email of user: ",
        value12.email2
      );
    }
    getData(value12.userid);
  }, [value12.userid]);

  const onDel = (add) => {
    console.log(add._id);
    const id = add._id;
    axios
      .delete("http://localhost:5000/ads/" + id)
      .then((response) => {
        // console.log(response.data);
        setData(data.filter((el) => el._id !== id));
      })
      .catch(() => {
        alert("alert");
      });
  };
  return (
    <div className="ui  container" style={{ marginTop: "10px" }}>
      <div className="ui grid">
        <div className="ui row">
          <div className="five wide column">
            <AddList adds={data} onDel={onDel} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyAdds;
