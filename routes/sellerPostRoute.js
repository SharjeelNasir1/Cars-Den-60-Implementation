const express = require("express");
const router = express.Router();
const sellForm = require("../models/sellerPostModel");

router.route("/post").post((req, res) => {
  const city = req.body.city;
  const carInfo = req.body.carInfo;
  const yearRegistered = req.body.yearRegistered;
  const color = req.body.color;
  const mileage = req.body.mileage;
  const price = req.body.price;
  const descrip = req.body.descrip;
  const engineType = req.body.engineType;
  const engineCc = req.body.engineCc;
  const trans = req.body.trans;
  const assembly = req.body.assembly;
  const photo = req.body.photo;
  const photoType = req.body.photoType;
  const userid = req.body.userid;
  console.log(req.body);
  const newPost = new sellForm({
    city,
    carInfo,
    yearRegistered,
    color,
    mileage,
    price,
    descrip,
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

router.route("/myadds").get(async (req, res) => {
  const filter = {};
  const all = await sellForm.find(filter);
  res.json(all.reverse());
});

router.route("/ads/:id").delete((req, res) => {
  sellForm
    .findByIdAndDelete(req.params.id)
    .then(() => res.json("Deleted"))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/add/:id").get((req, res) => {
  sellForm
    .find({ userid: req.params.id })
    .then((response) => res.json(response))
    .catch((err) => res.status(400).json("Error" + err));
});
router.route("/adddetails/:id").get((req, res) => {
  console.log(req.params.id)
  sellForm
    .findById(req.params.id)
    .then((response) => res.json(response))
    .catch((err) => res.status(400).json("Error" + err));
});
router.route("/displayads/:city/:transmission").get(async(req,res) => {
  try {
      console.log(req.params)
      const posts = await sellForm.find({city: req.params.city, trans: req.params.transmission})
      console.log(Object.keys(posts).length)
      res.status(200).json({posts:Object.values(posts)})
  } catch (error) {
      res.status(404).json({msg: error.message})
  }
})
router.route("/editselladds/:id").post((req, res) => {
  sellForm
    .findById(req.params.id)
    .then((response) => {
      response.city = req.body.city;
      response.carInfo = req.body.carInfo;
      response.color = req.body.color;
      response.registered = req.body.registered;
      response.mileage = req.body.mileage;
      response.descrip = req.body.descrip;
      response.trans = req.body.trans;
      response.assembly = req.body.assembly;
      response.engineCc = req.body.engineCc;
      response.engineType = req.body.engineType;
      response.price = req.body.price;
      response.photo = req.body.photo;
      response.photoType = req.body.photoType;
      response
        .save()
        .then(() => res.json("Updated"))
        .catch((err) => res.status(400).json("Error yr" + err));
    })
    .catch((err) => res.status(400).json(" yr Error" + err));
});

module.exports = router;
