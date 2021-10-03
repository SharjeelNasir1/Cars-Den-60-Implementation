
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
 var user = new Schema({
    "gender": String,
    "email":String, 
    "name":String,
    "phoneno": String,
    "pass":String,
    "DOB": String
});
module.exports = mongoose.model('details', user);