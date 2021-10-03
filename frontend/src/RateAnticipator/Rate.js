import React from "react";
import axios from "axios";
export default class Prediction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "0",
      model: "1",
      city: "0",
      year: "2000",
      kms: "1",
      condition: "0",
      fuel: "0",
      price: "0",
      success: false,
    };
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ success: false });
    this.setState({ [e.target.name]: e.target.value });
  };

  fetchprice = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const brand = Number(this.state.brand);
    const condition = Number(this.state.condition);
    const fuel = Number(this.state.fuel);
    const kms = Number(this.state.kms);
    const model = Number(this.state.model);
    const city = Number(this.state.city);
    const year = Number(this.state.year);

    const body = { inputt: [brand, condition, fuel, kms, model, city, year] };
    console.log(body.inputt);

    const res = await axios.post("http://localhost:5000/predict", body, config);
    console.log(res.data);
    if (res.data.success) {
      this.setState({ price: res.data.price, success: true });
    }
  };

  handleSubmit = (e) => {
    console.log(this.state);
    this.fetchprice();
    e.preventDefault();
  };

  render() {
    return (
      <>
        <div className="my-5">
          <div className="text-center price_prediction">
            <h1> Price Prediction</h1>
            <h5 className="prediction">
              Predict the most accurate market value of your Car
            </h5>
          </div>
        </div>
        <div className="container contact_div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Car Brand
                  </label>
                  <select
                    name="brand"
                    class="form-control"
                    value={this.state.brand}
                    onChange={this.handleChange}
                  >
                    <option value="0">Toyota </option>
                    <option value="1">Honda</option>
                    <option value="2">Suzuki</option>
                    <option value="3">Kia</option>
                  </select>
                  <div id="emailHelp" className="form-text">
                    {" "}
                    Select your car Brand from here
                  </div>
                </div>

                {this.state.brand == "0" ? (
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Car Model
                    </label>
                    <select
                      name="model"
                      class="form-control"
                      value={this.state.model}
                      onChange={this.handleChange}
                    >
                      <option value="0">Corolla </option>
                      <option value="1">Prado</option>
                      <option value="3">Passo</option>
                    </select>
                    <div id="emailHelp" className="form-text">
                      {" "}
                      Select your car Model here
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {this.state.brand == "1" ? (
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Car Model
                    </label>
                    <select
                      name="model"
                      class="form-control"
                      value={this.state.model}
                      onChange={this.handleChange}
                    >
                      <option value="4">Civic </option>
                      <option value="5">City</option>
                    </select>
                    <div id="emailHelp" className="form-text">
                      {" "}
                      Select your car Model here
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {this.state.brand == "2" ? (
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Car Model
                    </label>
                    <select
                      name="model"
                      class="form-control"
                      value={this.state.model}
                      onChange={this.handleChange}
                    >
                      <option value="6">Alto </option>
                      <option value="7">Khyber</option>
                      <option value="8">Mehran</option>
                    </select>
                    <div id="emailHelp" className="form-text">
                      {" "}
                      Select your Model here
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {this.state.brand == "3" ? (
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Car Model
                    </label>
                    <select
                      name="model"
                      class="form-control"
                      value={this.state.model}
                      onChange={this.handleChange}
                    >
                      <option value="9">Pride</option>
                      <option value="10">Sportage</option>
                    </select>
                    <div id="emailHelp" className="form-text">
                      {" "}
                      Select your car Model here
                    </div>
                  </div>
                ) : (
                  ""
                )}

                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    City
                  </label>
                  <select
                    class="form-control"
                    name="city"
                    value={this.state.city}
                    onChange={this.handleChange}
                  >
                    <option value="0">Karachi </option>
                    <option value="1">Islamabad</option>
                    <option value="2">Lahore</option>
                    <option value="3">Rawalpindi</option>
                  </select>
                  <div id="emailHelp" className="form-text">
                    {" "}
                    Select the city from which your car originally belongs
                  </div>
                </div>

                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Enter Registerd Year
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Year"
                    name="year"
                    value={this.state.year}
                    onChange={this.handleChange}
                  />
                  <div id="emailHelp" className="form-text">
                    {" "}
                  </div>
                </div>

                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Kilometers Driven
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="kms Driven"
                    name="kms"
                    value={this.state.kms}
                    onChange={this.handleChange}
                  />
                  <div id="emailHelp" className="form-text">
                    {" "}
                    Enter the number of killometers driven of your car{" "}
                  </div>
                </div>

                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Fuel
                  </label>
                  <select
                    class="form-control"
                    name="fuel"
                    value={this.state.fuel}
                    onChange={this.handleChange}
                  >
                    <option value="0">Diesel </option>
                    <option value="1">Petrol</option>
                    <option value="2">CNG</option>
                  </select>
                  <div id="emailHelp" className="form-text">
                    {" "}
                    Select the Fuel of your car{" "}
                  </div>
                </div>

                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    {" "}
                    Car Condition
                  </label>
                  <select
                    class="form-control"
                    name="condition"
                    value={this.state.condition}
                    onChange={this.handleChange}
                  >
                    <option value="0">Used </option>
                    <option value="1">New</option>
                  </select>
                  <div id="emailHelp" className="form-text">
                    {" "}
                    Select the condition of your car{" "}
                  </div>
                </div>

                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" for="exampleCheck1">
                    Confirm Information
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.handleSubmit}
                >
                  Submit
                </button>
                {this.state.success ? (
                  <h1>Price: Rs {this.state.price}</h1>
                ) : (
                  ""
                )}
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
