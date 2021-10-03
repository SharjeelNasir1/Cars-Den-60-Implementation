var ObjectId = require("mongodb").ObjectID;

const bcrypt = require("bcrypt");
const saltRounds = 10;
const axios = require("axios");
var userModel = require("../models/usermodel");
exports.getuserByID = function (req, res) {
  let id = req.params.id;
  userModel.findOne({ _id: ObjectId(req.params.id) }, function (err, profile) {
    console.log("profile Found", profile);
    res.json(profile);
  });
};
exports.signup = function (req, res) {
  var countValue = req.body;
  console.log("CountValue is", countValue);
  bcrypt.hash(req.body.pass, saltRounds, async (err, hash) => {
    var data = {
      email: countValue.email,
      pass: hash,
      phoneno: countValue.phoneno,
      gender: countValue.gender,
      DOB: countValue.dob,
    };
    console.log("HashedPwd: ", hash);
    userModel.create(data, function (err, collection) {
      if (err) throw err;
      console.log("Record inserted Successfully");
      return res.send({
        success: true,
        message: "You are now a user",
      });
    });
  });
};
exports.signin = function (req, res) {
  var countValue = req.body;
  console.log("U are ", countValue.email);
  var data = {
    email: countValue.email,
  };
  userModel.findOne({ email: countValue.email }, function (err, collection) {
    if (err) {
      console.log("Invalid User");
      return res.send({
        success: false,
        message: "User not exists",
      });
    } else {
      if (collection != null) {
        console.log("User found");
        bcrypt.compare(countValue.pass, collection.pass, function (err, resi) {
          console.log(resi);
          if (resi === true) {
            console.log("Correct details found");
            console.log(collection.email, collection.name, collection._id);
            return res.send({
              success: true,
              message: "Correct Details",
              email: collection.email,
              _id: collection._id,
              name: collection.name,
            });
          } else {
            return res.send({
              success: false,
              message: "Error: Email and Pass Dont Match",
            });
          }
        });
      } else {
        console.log("User not found");
        return res.send({
          success: false,
          message: "Error: Incorrect User, Recheck Your Email",
        });
      }
    }
  });
};
exports.getworkshops = async function (req, res) {
  console.log(
    "latitude: ",
    req.params.latitude,
    " longitude: ",
    req.params.longitude
  );
  const { data } = await axios.get(
    //https://maps.googleapis.com/maps/api/place/textsearch/json?query=${address}&type=restaurant&key=${${process.env.GOOGLEAPIKEY}}
    //https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=33.7195361,73.0529528&radius=200&type=restaurant&key=${process.env.GOOGLEAPIKEY}
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${req.params.latitude},${req.params.longitude}&radius=1000&type=car_repair&key=AIzaSyCpYoojDkdgcjj-P8bBP0fQ-Fau-UPdYCc`
  );
  console.log(data.results.length);
  console.log(data.next_page_token);
  token2 = data.next_page_token;
  var i = 1;
  data.results.forEach((element) => {
    console.log(element.name);
  });
  res.json(data);
};
