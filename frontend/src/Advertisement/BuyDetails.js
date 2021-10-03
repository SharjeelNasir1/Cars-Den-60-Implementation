import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BuyDetails() {
  let params = useParams();
  const [city, setCity] = useState();
  const [car, setCar] = useState();
  const [carInfo, setCarInfo] = useState();

  const getDetails = (id) => {
    console.log(id);
    axios
      .get("http://localhost:5000/adddetails/" + id)
      .then((response) => {
        console.log(response.data);
        setCity(response.data.city);
        setCar(response.data.car);
        setCarInfo(response.data.carInfo);
      })
      .catch(function (error) {
        console.log(error);
        console.log("Aey te error hai bro");
      });
  };
  useEffect(() => {
    getDetails(params.id);
  }, [params.id]);
  return (
    <div>
      <h1>
        Add Details {car}
        {city}
        {carInfo}
      </h1>
    </div>
  );
}

export default BuyDetails;
