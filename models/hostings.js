const mongoose = require ("mongoose")

const HostingSchema = new mongoose.Schema({

    // portions:{
    //     type: String,
    // },
    // title:{
    //     type: String,
    //     required: true
    // },
    // description:{
    //     type: String,
    //     required: true
    // },
    // location:{
    //     type: String,
    //     required: true
    // },
    // rooms:{
    //     type: String,

    // },
    // bathrooms:{
    //     type: String,

    // },
    // price:{
    //     type: String,
    //     required: true
    // },

    // pictures:{
    //     type:[String],
    //     required:true
    // },
    city: String,
    carInfo: String,
    color: String,
    engineType: String,
    engineCc: String,
    trans: String,
    assembly: String,
    price: String,
    photo: {
        type: Buffer,
        required: true,
    },
    photoType: {
        type: String,
        required: true,
    },
    phoneno: {
        type: String,
    },

    email:{
        type: String,
    },

    user: {
        type: String
        
    },
    
    reservations:{
        type: [{
            dates:[Date],
            user:{type: String}
        }]
    },
    date: {
        type: Date,
        default: Date.now
    },

})

Hosting = mongoose.model('hosting', HostingSchema)
module.exports = Hosting