var express = require("express");
var router = express.Router();
var user_controller = require("../controller/usercontroller");

router.get("/user/:id", user_controller.getuserByID);
router.post("/sign-up", user_controller.signup);
router.post("/sign-in", user_controller.signin);
router.get("/getworkshops/:latitude/:longitude", user_controller.getworkshops);
module.exports = router;
