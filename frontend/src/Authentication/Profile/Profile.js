import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
function Profile() {
  let params = useParams();
  const [profileinfo, setProfileinfo] = useState([]);
  const getProfile = (id) => {
    axios
      .get("http://localhost:5000/user/" + id)
      .then((response) => {
        console.log("Opened Profile Info: ", response.data);
        setProfileinfo(response.data);
      })
      .catch(function (error) {
        console.log(error);
        console.log("Aey te error hai bro");
      });
  };
  useEffect(() => {
    console.log("We opening profile" + params.id);
    var ret = params.id.replace("profile", "");
    console.log(ret);

    getProfile(ret);
  }, [params]);
  return (
    <div>
      <h1>Profile Info will be here</h1>
      <h2>{profileinfo.name}</h2>
      <h2>{profileinfo.gender}</h2>
      <h3>{profileinfo.DOB}</h3>

      <Link to={"/myadds/" + params.id}>
        <button>My Ads</button>
      </Link>
      <Link to={"/myleasedads/" + params.id}>
        <button>My leased Ads</button>
      </Link>
      {/* <Link to={"/notifications/" + params.id}>
        <button>Notifications</button>
      </Link> */}
    </div>
  );
}
export default Profile;
