import React from "react";
import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import Marker from "./Marker";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
function NearbyWorkShops() {
  const [nearbyshops, setNearbyshops] = useState([]);
  useEffect(() => {}, []);
  const getWorkShops = async () => {
    var latitude;
    var Longitude;
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      axios
        .get(
          "http://localhost:5000/getworkshops/" +
            position.coords.latitude +
            "/" +
            position.coords.longitude
        )
        .then((response) => {
          console.log(response.data.results);
          setNearbyshops(response.data.results);
        })
        .catch(function (error) {
          console.log(error);
          console.log("error");
        });
    });
  };

  const defaultProps = {
    center: {
      lat: 33.6920576,
      lng: 72.9776128,
    },
    zoom: 14,
  };
  return (
    <div>
      <h1>NearbyWorkShops</h1>
      <button onClick={() => getWorkShops()}>Get Shops</button>
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          {nearbyshops
            ? nearbyshops.map((c) => (
                <Marker
                  lat={c.geometry.location.lat}
                  lng={c.geometry.location.lng}
                  name={c.name}
                  color="blue"
                />
              ))
            : null}
        </GoogleMapReact>
      </div>
    </div>
  );
}

export default NearbyWorkShops;
