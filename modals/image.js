const mongoose = require("mongoose")

const imageModel = mongoose.Schema({
    name : {
        type : String,
        required : [true,"Name must required"]
    },
    episodeNumber : {
        type : Number,
        required : [true,"Episode number must required"]
    },
    type : {
        type : String,
        required : [true,"type must required"]
    },
    branch : {
        type : String,
        required : [true,"branch must required"]
    },
    views : {
        type : Number,
        default : 0
    },
    description : {
        type : String,
        default : ""
    },
    password : {
        type : Number,
        required : [true,"password must required"]
    },
    url : {
        type : String,
        required : [true,"URL must required"]
    },
    pic : {
        type : String,
        required : [true,"pic must required"]
    }
})

const image = new mongoose.model("image",imageModel)
module.exports = image