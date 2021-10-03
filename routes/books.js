const express = require("express");
const router = express.Router();
const Book = require("../models/book");

router.route("/post").post((req, res) => {
  // const photo0 = req.body.photo0;
  // const photoType0 = req.body.photoType0;
  // const photo1 = req.body.photo1;
  // const photoType1 = req.body.photoType1;
  // const photo2 = req.body.photo2;
  // const photoType2 = req.body.photoType2;
  const a = [req.body.profile[0], req.body.profile[1]];
  // console.log(req.body.);
  console.log(a.length);
  const data = {
    photo: a,
    // photo0,
    // photoType0,
    // photo1,
    // photoType1,
    // photo2,
    // photoType2,
  };

  Book.create(data, function (err, collection) {
    if (err) throw err;
    console.log("Review inserted Successfully");
  });
});
router.route("/view").get((req, res) => {
  Book.find()
    .then((Book) => res.json(Book))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/view/:id").get((req, res) => {
  Book.findById(req.params.id)
    .then((response) => res.json(response))
    .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
