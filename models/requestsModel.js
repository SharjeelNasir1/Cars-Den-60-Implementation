const mongoose = require("mongoose");

var Schema = mongoose.Schema;
const requestSchema = {
  adid: { type: mongoose.Schema.Types.ObjectId, ref: "rentPostForm" },
  renterid: { type: mongoose.Schema.Types.ObjectId, ref: "details" },
  leaserid: { type: mongoose.Schema.Types.ObjectId, ref: "details" },
  status: { type: String, default: "Normal" },
};

const requestForm = mongoose.model("requestForm", requestSchema);

module.exports = requestForm;
