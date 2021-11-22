
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
 var user = new Schema({
    "gender": String,
    "email":String, 
    "name":String,
    "phoneno": String,
    "pass":String,
    "DOB": String,
    requests : {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "hosting"
    },
    reservations : {

       type: [{
        hosting: {type:String},
        user: {type: String},
        dates: {type: [Date]},
        name: {type: String},
        title: {type: String},
        location : {type: String}

        }]       
    },

    notifications : {
        type: [String]
    },
});
module.exports = mongoose.model('details', user);