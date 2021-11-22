import React, { useState, useContext } from "react";
import axios from "axios";
import { FilePond, registerPlugin } from "react-filepond";
import { UserContext } from "../../../UserContext";
import { Typography } from "@material-ui/core";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";

// Register the plugin
registerPlugin(FilePondPluginFileEncode);
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

function Rent() {
  const value12 = useContext(UserContext);
  const [city, setCity] = useState("Islamabad");
  const [carInfo, setCarInfo] = useState("");
  const [color, setColor] = useState("");
  const [engineCc, setEngineCc] = useState("");
  const [engineType, setEngineType] = useState("");
  const [assembly, setAssembly] = useState("Local");
  const [price, setPrice] = useState("");
  const [trans, setTrans] = useState("Automatic");
  const [profile, setProfile] = useState([]);
  const postUpdate = async () => {
    const body = {
      city: city,
      carInfo: carInfo,
      color: color,
      assembly: assembly,
      trans: trans,
      engineType: engineType,
      engineCc: engineCc,
      price: price,
      photo: profile[0].getFileEncodeBase64String(),
      photoType: profile[0].fileType,
      user: value12.userid,
      email:value12.email2,
      phoneno:value12.phoneno
    };

    console.log(body);
    axios.post("http://localhost:5000/host/posthosting", body);
    console.log("gaya khtm tata ");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    postUpdate();
  };

  return (
    <div>
      <div className="ui  container" style={{ marginTop: "10px" }}>
        <div className="ui segment">
          <form className="ui form">
            <label>City</label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            >
              <option value="Islamabad">Islamabad</option>
              <option value="Lahore">Lahore</option>
              <option value="Rawalpindi">Rawalpindi</option>
              <option value="Karachi">Karachi</option>
              <option value="Faisalabad">Faisalabad</option>
              
            </select>{" "}
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
            />{" "}
            <div className="App">
              <FilePond
                allowMultiple={false}
                // allowMultiple={true}
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                imageResizeTargetHeight={150}
                imageResizeTargetWidth={150}
                files={profile}
                onupdatefiles={setProfile}
                // maxFiles={3}
                maxFileSize="100KB"
              />
            </div>
            <button onClick={onSubmit}>Search</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Rent;
