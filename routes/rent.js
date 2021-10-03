const express = require("express");
const router = express.Router();
const rentPostForm = require("../models/rentModel");

router.route("/leaserpost").post((req, res) => {
  const city = req.body.city;
  const carInfo = req.body.carInfo;
  const color = req.body.color;
  const price = req.body.price;
  const engineType = req.body.engineType;
  const engineCc = req.body.engineCc;
  const trans = req.body.trans;
  const assembly = req.body.assembly;
  const photo = req.body.photo;
  const photoType = req.body.photoType;
  const userid = req.body.userid;
  console.log(req.body);
  const newPost = new rentPostForm({
    city,
    carInfo,
    color,
    price,
    engineType,
    engineCc,
    trans,
    assembly,
    photo,
    photoType,
    userid,
  });

  newPost.save();
});

router.route("/renterads").get(async (req, res) => {
  const filter = {};
  const all = await rentPostForm.find(filter);
  res.json(all.reverse());
});

router.route("/leaserads/:id").delete((req, res) => {
  rentPostForm
    .findByIdAndDelete(req.params.id)
    .then(() => res.json("Deleted"))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/leaseradd/:id").get((req, res) => {
  rentPostForm
    .find({ userid: req.params.id })
    .then((response) => res.json(response))
    .catch((err) => res.status(400).json("Error" + err));
});
router.route("/leaseraddetails/:id").get((req, res) => {
  rentPostForm
    .findById(req.params.id)
    .then((response) => res.json(response))
    .catch((err) => res.status(400).json("Error" + err));
});
router.route("/leasereditads/:id").post((req, res) => {
  rentPostForm
    .findById(req.params.id)
    .then((response) => {
      response.city = req.body.city;
      response.carInfo = req.body.carInfo;
      response.color = req.body.color;
      response.trans = req.body.trans;
      response.assembly = req.body.assembly;
      response.engineCc = req.body.engineCc;
      response.engineType = req.body.engineType;
      response.price = req.body.price;
      response.photo = req.body.photo;
      response.photoType = req.body.photoType;
      response.userid = req.body.userid;
      response
        .save()
        .then(() => res.json("Updated"))
        .catch((err) => res.status(400).json("Error yr" + err));
    })
    .catch((err) => res.status(400).json(" yr Error" + err));
});

module.exports = router;
