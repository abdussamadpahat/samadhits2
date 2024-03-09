const Media = require("../modals/media")
const fs = require("fs")

exports.getAll = async (req, res) => {
  try {
    const media = await Media.find();

    res.json(media);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
// Backendurl/public/videos/file_name.mp4
exports.create = async (req, res) => {
  const { name } = req.body;
  let videosPaths = [];

  if (Array.isArray(req.files.videos) && req.files.videos.length > 0) {
    for (let video of req.files.videos) {
      videosPaths.push("/" + video.path);
    }
  }

  try {
    const createdMedia = await Media.create({
      name,
      videos: videosPaths,
    });

    res.json({ message: "Media created successfully", createdMedia });
  } catch (error) {
    console.log(error);
    if(error.errors.name){
      res.status(400).send({result : "Fail", message : error.errors.name.message})
    }
    else if(error.errors.type){
      res.status(400).send({result : "Fail", message : error.errors.type.message})
    }
    else if(error.errors.episode){
      res.status(400).send({result : "Fail", message : error.errors.episode.message})
    }
    else if(error.errors.views){
      res.status(400).send({result : "Fail", message : error.errors.views.message})
    }
    else{
      res.status(500).send({result : "Fail", message : "Internel server error"})
    }
  }
};

exports.deletemedia = async (req, res) => {
  try {
    let data = await Media.findOne({_id : req.params._id})
  if(data){
    if(data.videos){
      let newName = data.videos[0].slice(15)
      fs.unlinkSync("public/videos/"+newName)
      // console.log(newName,"is deleted successfully");
    }
    await Media.deleteOne({_id : req.params._id})
  }
  res.send({result : "Done", message: "Video deleted successfully!!!"})
  } catch (error) {
    console.log(error);
    res.status(500).send({result: "Fail", message : "Internel Server Error..."})
  }
}
