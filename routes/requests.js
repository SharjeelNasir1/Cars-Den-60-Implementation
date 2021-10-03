var ObjectId = require("mongodb").ObjectID;
const express = require("express");
const router = express.Router();
const requestForm = require("../models/requestsModel");

router.route("/sendrequest").post((req, res) => {
  const adid = req.body.adid;
  const leaserid = req.body.leaserid;
  const renterid = req.body.renterid;

  console.log(req.body);
  const newPost = new requestForm({
    adid,
    leaserid,
    renterid,
  });

  newPost.save();
});
router.route("/notifications/:id").get(async (req, res) => {
  const notifications = await requestForm
    .find({ leaserid: ObjectId(req.params.id) })
    .populate("renterid")
    .populate("adid");
  res.json(notifications);
});
router.route("/acceptnotifications/:id").get(async (req, res) => {
  const notifications = await requestForm
    .find({ renterid: ObjectId(req.params.id) })
    .populate("leaserid")
    .populate("adid");
  res.json(notifications);
});
router.route("/sendacceptrequest/:id").post(async (req, res) => {
  await requestForm.findOne(req.body._id, function (err, creden) {
    console.log("creden Found", creden.status);
    creden.status = "Accept";
    return creden.save();
  });
});

module.exports = router;
