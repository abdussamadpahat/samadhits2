const mongoose = require("mongoose")

const addModel = mongoose.Schema({
    pic : {
        type : String,
        // required : [true,"pic must required"]
        default : ""
    },
    url : {
        type : String,
        // required : [true,"URL must required"]
        default : ""
    }
})

const add = new mongoose.model("add",addModel)
module.exports = add