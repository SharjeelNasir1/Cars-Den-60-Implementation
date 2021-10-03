import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../UserContext";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";

import {
  Grid,
  makeStyles,
  TextField,
  Typography,
  Paper,
  FormControl,
  FormLabel,
  InputAdornment,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
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

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      marginTop: theme.spacing(2),
      // alignItems: "center",
      // justify: "center",
    },
  },
  pageContent: { margin: theme.spacing(5), padding: theme.spacing(3) },
  formControl: {
    marginTop: theme.spacing(2),
    width: "80%",
  },
}));

function Post() {
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

  const classes = useStyles();

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
      photo: profile[0].getFileEncodeBase64String(),
      photoType: profile[0].fileType,
      userid: value12.userid,
    };
    console.log(body);
    const res = await axios.post("http://localhost:5000/post", body);
    console.log(res.data);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    postUpdate();
  };
  return (
    <Paper className={classes.pageContent}>
      <form className={classes.root}>
        <Grid container>
          <Typography variant="h3" component="h2" gutterBottom>
            Post An Ad :)
          </Typography>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Select
              className={classes.formControl}
              variant="outlined"
              placeholder="City"
              value={city}
              onChange={(event) => setCity(event.target.value)}
              required
            >
              <MenuItem value="" disabled>
                <em>City</em>
              </MenuItem>
              <MenuItem value="Islamabad">Islamabad</MenuItem>
              <MenuItem value="Rawalpindi">Rawalpindi</MenuItem>
              <MenuItem value="Lahore">Lahore</MenuItem>
              <MenuItem value="Karachi">Karachi</MenuItem>
              <MenuItem value="Peshawar">Peshawar</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Registered Year </FormLabel>
            <TextField
              variant="outlined"
              value={yearRegistered}
              onChange={(e) => setYearRegistered(e.target.value)}
              placeholder="Registered Year"
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Mileage</FormLabel>
            <TextField
              variant="outlined"
              value={mileage}
              placeholder="Mileage"
              onChange={(e) => setMileage(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <TextField
              variant="outlined"
              type="text"
              value={descrip}
              placeholder="Description"
              onChange={(e) => setDescrip(e.target.value)}
            />
          </FormControl>{" "}
          <FormControl>
            <FormLabel>Engine Type</FormLabel>
            <Select
              className={classes.formControl}
              variant="outlined"
              value={engineType}
              onChange={(e) => setEngineType(e.target.value)}
              placeholder="Engine Type"
            >
              <MenuItem value="Diesel">Diesel</MenuItem>
              <MenuItem value="Petrol">Petrol</MenuItem>
              <MenuItem value="CNG">CNG</MenuItem>
              <MenuItem value="Electric Car">Electric Car</MenuItem>
            </Select>
          </FormControl>{" "}
          <FormControl>
            <FormLabel>Engine CC</FormLabel>
            <TextField
              variant="outlined"
              value={engineCc}
              onChange={(e) => setEngineCc(e.target.value)}
              placeholder="Engine CC"
            />
          </FormControl>{" "}
          <FormControl>
            <FormLabel>Color</FormLabel>
            <Select
              className={classes.formControl}
              variant="outlined"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              placeholder="Exterior Color"
              required
            >
              <MenuItem value="White">White</MenuItem>
              <MenuItem value="Silver">Silver</MenuItem>
              <MenuItem value="Black">Black</MenuItem>
              <MenuItem value="Grey">Grey</MenuItem>
              <MenuItem value="Blue">Blue</MenuItem>
            </Select>
          </FormControl>{" "}
          <FormControl>
            <FormLabel>Car Information</FormLabel>
            <TextField
              variant="outlined"
              value={carInfo}
              onChange={(event) => setCarInfo(event.target.value)}
              placeholder="Car Information"
            />
          </FormControl>{" "}
          <FormControl>
            <FormLabel>Transmission</FormLabel>{" "}
            <Select
              className={classes.formControl}
              variant="outlined"
              value={trans}
              onChange={(e) => setTrans(e.target.value)}
              placeholder="Transmition"
            >
              <MenuItem value="Automatic">Automatic</MenuItem>
              <MenuItem value="Manual">Manual</MenuItem>
            </Select>
          </FormControl>{" "}
          <FormControl>
            <FormLabel>Assembly</FormLabel>{" "}
            <Select
              className={classes.formControl}
              variant="outlined"
              value={assembly}
              onChange={(e) => setAssembly(e.target.value)}
              placeholder="Assembly"
            >
              <MenuItem value="Local">Local</MenuItem>
              <MenuItem value="Imported">Imported</MenuItem>
            </Select>
          </FormControl>{" "}
          <FormControl>
            <FormLabel>Price</FormLabel>{" "}
            <TextField
              variant="outlined"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
            />
          </FormControl>
        </Grid>
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
        <Button
          onClick={onSubmit}
          variant="contained"
          color="primary"
          size="large"
          text="Submit"
        >
          Submit
        </Button>

        <Button variant="contained" color="secondary" size="large">
          Reset
        </Button>
      </form>
    </Paper>
  );
}

export default Post;
