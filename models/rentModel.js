const mongoose = require("mongoose");

const rentSchema = {
  city: String,
  carInfo: String,
  color: String,
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

const rentPostForm = mongoose.model("rentPostForm", rentSchema);

module.exports = rentPostForm;
