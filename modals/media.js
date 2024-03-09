const mongoose = require("mongoose");

const MediaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default : "name not defined"
    },
    videos: [{ type: String }],
    description : {
      type : String,
      default : ""
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Media = mongoose.model("Media", MediaSchema);
