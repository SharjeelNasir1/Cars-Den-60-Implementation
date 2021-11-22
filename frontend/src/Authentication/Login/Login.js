import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
// import './logincss.css'

const Login = ({ setUser, setUserid, setEmail2,setPhoneno, setIslogged }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  let history = useHistory();
  const getReviews = async () => {
    await axios
      .get("http://localhost:5000/checking")
      .then((response) => {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleChange = async (e) => {
    //i will authenticate user
    e.preventDefault();
    console.log("email: ", email);

    const URL = "http://localhost:5000/sign-in";
    var data2 = {
      email: email,
      pass: pass,
    };
    const options = {
      method: "post",
      url: URL,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: data2,
      validateStatus: (status) => {
        return true; // I'm always returning true, you may want to do it depending on the status received
      },
    };
    axios(options)
      .then((response) => {
        console.log("Response is ", response.data);
        if (response.data.success) {
          console.log("work");
          setSuccess(response.data.message);
          setUser(response.data.name);
          setEmail2(response.data.email);
          setUserid(response.data._id);
          setPhoneno(response.data.phoneno)
          localStorage.setItem("data", JSON.stringify(response.data));
          setIslogged(true);
          history.push("/");
        } else {
          setError(response.data.message);
        }
      })
      .catch((error) => {
        console.log("Error is: ", error.response);
      });
  };
  useEffect(() => {
    // Update the document title using the browser API
    getReviews();
  }, []);
  return (
    <>
      <div className="my-5">
        <div className="text-center">
          <h1> Sign In</h1>
        </div>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>

              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    Remember me
                  </label>
                </div>
              </div>

              <button
                type="submit"
                onClick={handleChange}
                className="btn btn-primary btn-block"
              >
                Submit
              </button>
              <p className="forgot-password text-right">
                Forgot{" "}
                <a href="#" id="jj">
                  password?
                </a>
              </p>
            </form>
            {success ? (
              <div class="alert alert-success" role="alert">
                {success}
              </div>
            ) : null}
            {error ? (
              <div class="alert alert-danger" role="alert">
                {error}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
