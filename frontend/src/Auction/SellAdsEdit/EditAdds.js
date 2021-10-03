import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import { UserContext } from "../../UserContext";

import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import FilePondPluginImageResize from "filepond-plugin-image-resize";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(
  FilePondPluginFileEncode,
  FilePondPluginImageResize,
  FilePondPluginImagePreview,
  FilePondPluginFileValidateSize
);
function EditAdds() {
  let params = useParams();
  const value12 = useContext(UserContext);
  const [city, setCity] = useState("");
  const [carInfo, setCarInfo] = useState("");
  const [color, setColor] = useState("");
  const [yearRegistered, setYearRegistered] = useState("");
  const [mileage, setMileage] = useState("");
  const [descrip, setDescrip] = useState("");
  const [engineCc, setEngineCc] = useState("");
  const [engineType, setEngineType] = useState("");
  const [assembly, setAssembly] = useState("");
  const [price, setPrice] = useState("");
  const [trans, setTrans] = useState("");
  const [profile, setProfile] = useState("");
  const [profileType, setProfileType] = useState("");
  const getDetails = (id) => {
    axios
      .get("http://localhost:5000/adddetails/" + id)
      .then((response) => {
        console.log(response.data);
        setCity(response.data.city);
        setCarInfo(response.data.carInfo);
        setColor(response.data.color);
        setYearRegistered(response.data.yearRegistered);
        setMileage(response.data.mileage);
        setDescrip(response.data.descrip);
        setEngineType(response.data.engineType);
        setEngineCc(response.data.engineCc);
        setTrans(response.data.trans);
        setAssembly(response.data.assembly);
        setPrice(response.data.price);
        setProfile(response.data.photo);
        setProfileType(response.data.photoType);
      })
      .catch(function (error) {
        console.log(error);
        console.log("error");
      });
  };
  const postUpdate = async () => {
    const body = {
      city: city,
      carInfo: carInfo,
      color: color,
      yearRegistered: yearRegistered,
      mileage: mileage,
      descrip: descrip,
      assembly: assembly,
      trans: trans,
      engineType: engineType,
      engineCc: engineCc,
      price: price,
      photo: profile,
      photoType: profileType,
      userid: value12.userid,
    };
    console.log(body);
    const id = params.id;
    axios.post("http://localhost:5000/editselladds/" + id, body);
    console.log("gaya khtm tata ");
  };
  const onSubmit = (event) => {
    event.preventDefault();
    postUpdate();
  };

  useEffect(() => {
    getDetails(params.id);
  }, [params.id]);
  return (
    <div>
      <div className="ui  container" style={{ marginTop: "10px" }}>
        <div className="ui segment">
          <form className="ui form">
            <label>City</label>
            <input
              type="text"
              value={city}
              onChange={(event) => setCity(event.target.value)}
              required
            />{" "}
            <label>Registered Year</label>
            <select
              value={yearRegistered}
              onChange={(e) => setYearRegistered(e.target.value)}
              required
            >
              <option value="">Registered Year</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2016">2016</option>
            </select>
            <label>Mileage</label>
            <input
              type="text"
              value={mileage}
              onChange={(e) => setMileage(e.target.value)}
            />{" "}
            <label>Description</label>
            <input
              type="text"
              value={descrip}
              onChange={(e) => setDescrip(e.target.value)}
            />{" "}
            <label>Color</label>
            <select
              value={color}
              onChange={(e) => setColor(e.target.value)}
              required
            >
              <option value="">Exterior Color</option>
              <option value="White">White</option>
              <option value="Silver">Silver</option>
              <option value="Black">Black</option>
              <option value="Grey">Grey</option>
              <option value="Blue">Blue</option>
            </select>{" "}
            <label>Car Information</label>
            <input
              type="text"
              value={carInfo}
              onChange={(event) => setCarInfo(event.target.value)}
            />
            <label>Transmition</label>
            <select value={trans} onChange={(e) => setTrans(e.target.value)}>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
            </select>
            <label>Assembly</label>
            <select
              value={assembly}
              onChange={(e) => setAssembly(e.target.value)}
            >
              <option value="Local">Local</option>
              <option value="Imported">Imported</option>
            </select>
            <label>Engine Type</label>
            <select
              value={engineType}
              onChange={(e) => setEngineType(e.target.value)}
            >
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="CNG">CNG</option>
            </select>{" "}
            <label>Engine CC</label>
            <input
              type="text"
              value={engineCc}
              onChange={(e) => setEngineCc(e.target.value)}
            />{" "}
            <label>Price</label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            {console.log(profile)}
            {/* <div className="App"> */}
            {/* <FilePond
                allowMultiple={false}
                // allowMultiple={true}
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                imageResizeTargetHeight={150}
                imageResizeTargetWidth={150}
                files={profile}
                onupdatefiles={setProfile}
                // maxFiles={3}
                maxFileSize="300KB"
              />
            </div> */}
            <button onClick={onSubmit}>Search</button>
          </form>
        </div>
        <div>
          {profile === "" || profile === undefined ? (
            "Not Found"
          ) : (
            <img
              className="img-thumbnail click"
              alt="check"
              width={100}
              height={100}
              src={`data:${profileType};charset=utf8;base64,${Buffer.from(
                profile
              ).toString("ascii")}`}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default EditAdds;
