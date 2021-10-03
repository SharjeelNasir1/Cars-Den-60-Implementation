const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  // photo: {
  //   type: Buffer,
  //   required: true,
  // },
  // photoType: {
  //   type: String,
  //   required: true,
  // },
  photo: {
    type: [Buffer],
    required: true,
  },
  // photo0: {
  //   type: Buffer,
  //   required: true,
  // },
  // photoType0: {
  //   type: String,
  //   required: true,
  // },
  // photo1: {
  //   type: Buffer,
  //   required: true,
  // },
  // photoType1: {
  //   type: String,
  //   required: true,
  // },
  // photo2: {
  //   type: Buffer,
  //   required: true,
  // },
  // photoType2: {
  //   type: String,
  //   required: true,
  // },
});
module.exports = mongoose.model("Book", bookSchema);
// photo0: {
//   type: Buffer,
//   required: true,
// },
// photoType0: {
//   type: String,
//   required: true,
// },
// photo1: {
//   type: Buffer,
//   required: true,
// },
// photoType1: {
//   type: String,
//   required: true,
// },
// photo2: {
//   type: Buffer,
//   required: true,
// },
// photoType2: {
//   type: String,
//   required: true,
// },

// alpha: [
//   {
//     mom: {
//       type: Buffer,
//       required: true,
//     },
//     dad: { type: Buffer, required: true },
//   },
// ],

// alphaType: [
//   {
//     momType: {
//       type: Buffer,
//       required: true,
//     },
//     dadType: { type: Buffer, required: true },
//   },
// ],
// });
