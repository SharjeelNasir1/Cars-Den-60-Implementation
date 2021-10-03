const mongoose = require("mongoose");

const postSchema = {
  city: String,
  carInfo: String,
  yearRegistered: String,
  color: String,
  mileage: String,
  descrip: String,
  engineType: String,
  engineCc: String,
  trans: String,
  assembly: String,
  price: String,
  photo: {
    type: Buffer,
    required: true,
  },
  photoType: {
    type: String,
    required: true,
  },
  userid: String,
};

const sellForm = mongoose.model("sellForm", postSchema);

module.exports = sellForm;
