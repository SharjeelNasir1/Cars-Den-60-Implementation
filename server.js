const express = require("express");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const saltRounds = 10;
// const predictrouter = require("./routes/prediction.js");
const userrouter = require("./routes/user");
const rentrouter = require("./routes/rent.js");
const requestrouter = require("./routes/requests");
const conversationRoute = require("./routes/conversations");
const messageRoute = require("./routes/messages");
const predictrouter = require("./routes/prediction.js");
const hostingrouter = require ("./routes/hostings.js")
// const db = require("./config/config");
const cors = require("cors");
const app = express();
const bookRouter = require("./routes/books");
const mongoose = require("mongoose");

app.use(cors());
//app.use(express.json());


// app.use(bodyParser.json({ limit: "30mb", extended: true }));
//app.use(bodyParser.urlencoded({ limit: "10mb", extended: false }));
mongoose.connect(
  "mongodb+srv://moorrooch:1234@cluster0.sktno.mongodb.net/practiceDB",
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => console.log("DB connected")
);
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

// app.use(express.json({ limit: "50mb" }));
// app.use(express.static("./public"));
app.use("/predict", predictrouter);
app.use(userrouter);
app.use(rentrouter);
app.use(requestrouter);
app.use("/messages", messageRoute);
app.use("/conversations", conversationRoute);
app.use('/host', hostingrouter)

app.use("/books", bookRouter);
app.use("/", require("./routes/sellerPostRoute"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(PORT));

//image uploading
// const storage = multer.diskStorage({
//   destination: "./public/uploads",
//   filename: function (req, file, cb) {
//     cb(
//       null,
//       file.fieldname + "-" + Date.now() + path.extname(file.originalname)
//     );
//   },
// });

// const upload = multer({
//   storage: storage,
//   // limits: { fileSize: 10 },
//   fileFilter: function (req, file, cb) {
//     checkFileType(file, cb);
//   },
// });

// function checkFileType(file, cb) {
//   const filetypes = /jpeg|jpg|png|gif/;
//   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//   const mimetype = filetypes.test(file.mimetype);
//   if (mimetype && extname) {
//     return cb(null, true);
//   } else {
//     cb("error: images only");
//   }
// }

// app.post("/upload", upload.array("images", 2), (req, res) => {
//   console.log(req.file);
//   res.send("File Upload SuccessFul");
// });
