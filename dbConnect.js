const mongoose = require("mongoose")

async function getConnect(){
    try {
        await mongoose.connect(process.env.DB_KEY)
        // await mongoose.connect("mongodb://127.0.0.1:27017/videoPlayerDB")

        // await mongoose.connect("mongodb+srv://abdussamadkhan:Samad12345@cluster0.84rxiv5.mongodb.net/samadhitsDB")
        console.log("Database is connected!!!");
    } catch (error) {
        console.log(error);
    }
}

getConnect()