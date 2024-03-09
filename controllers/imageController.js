const image = require("../modals/image")
const fs = require("fs")

async function createImage(req, res) {
    try {
        const data = new image(req.body)
        if (req.file) {
            data.pic = req.file.filename
        }
        await data.save()
        res.send({ result: "Done", message: "Record created successfully", data: data })
    } catch (error) {
        if (error.errors.name) {
            res.status(400).send({ result: "Fail", message: error.errors.name.message })
        }
        else if (error.errors.episodeNumber) {
            res.status(400).send({ result: "Fail", message: error.errors.episodeNumber.message })
        }
        else if (error.errors.type) {
            res.status(400).send({ result: "Fail", message: error.errors.type.message })
        }
        else if (error.errors.branch) {
            res.status(400).send({ result: "Fail", message: error.errors.branch.message })
        }
        else if (error.errors.url) {
            res.status(400).send({ result: "Fail", message: error.errors.url.message })
        }
        else if (error.errors.pic) {
            res.status(400).send({ result: "Fail", message: error.errors.pic.message })
        }
        else if (error.errors.password) {
            res.status(400).send({ result: "Fail", message: error.errors.password.message })
        }
        else {
            res.status(500).send({ result: "Fail", message: "Internel Server error" })
        }
    }
}
async function getImages(req, res) {
    try {
        const data = await image.find()
        if (data) {
            res.send({ result: "Done", message: "images getted successfully", items: data.length, data: data })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ result: "Fail", message: "Internel Server Error..." })
    }
}
async function getSingleImage(req, res) {
    try {
        const data = await image.findOne({_id : req.params._id})
        if (data) {
            res.send({ result: "Done", message: "image getted successfully", data: data })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ result: "Fail", message: "Internel Server Error..." })
    }
}
async function updateImages(req, res) {
    try {
        let data = await image.findOne({ _id: req.params._id })
        if (data) {
            data.name = req.body.name ?? data.name
            data.episodeNumber = req.body.episodeNumber ?? data.episodeNumber
            data.type = req.body.type ?? data.type
            data.branch = req.body.branch ?? data.branch
            data.views = req.body.views ?? data.views
            data.url = req.body.url ?? data.url
            data.description = req.body.description ?? data.description
            data.password = req.body.password ?? data.password
            if (req.file) {
                if (data.pic) {
                    fs.unlinkSync("public/images/" + data.pic)
                }
                data.pic = req.file.filename
            }
            await data.save()
        }
        res.send({ result: "Done", message: "Updated Successfully!!!", data: data })
    } catch (error) {
        if (error.errors.name) {
            res.status(400).send({ result: "Fail", message: error.errors.name.message })
        }
        else if (error.errors.episodeNumber) {
            res.status(400).send({ result: "Fail", message: error.errors.episodeNumber.message })
        }
        else if (error.errors.type) {
            res.status(400).send({ result: "Fail", message: error.errors.type.message })
        }
        else if (error.errors.branch) {
            res.status(400).send({ result: "Fail", message: error.errors.branch.message })
        }
        else if (error.errors.url) {
            res.status(400).send({ result: "Fail", message: error.errors.url.message })
        }
        else if (error.errors.pic) {
            res.status(400).send({ result: "Fail", message: error.errors.pic.message })
        }
        else if (error.errors.password) {
            res.status(400).send({ result: "Fail", message: error.errors.password.message })
        }
        else {
            res.status(500).send({ result: "Fail", message: "Internel Server error" })
        }
    }
}
async function deleteImage(req, res) {
    try {
        let data = await image.findOne({ _id: req.params._id })
        if (data) {
            if (data.pic) {
                fs.unlinkSync("public/images/" + data.pic)
            }
            await image.deleteOne({ _id: req.params._id })
        }
        res.send({ result: "Done", message: "Deleted Successfully!!!" })
    } catch (error) {
        console.log(error);
        res.status(500).send({ result: "Fail", message: "Internel Server Error..." })
    }
}
async function increaseViews(req, res) {
    try {
        let data = await image.findOne({ _id: req.params._id })
        if (data) {
            data.views = data.views+1
            await data.save()
        }
        res.send({ result: "Done", message: "One view increased!!!", data : data })
    } catch (error) {
        console.log(error);
        res.status(500).send({ result: "Fail", message: "Internel Server Error..." })
    }
}
async function adminpass(req, res) {
    try {
        const data = await image.findOne({_id : req.params._id})
        if (data) {
            res.send({ result: "Done", message: "movies getted successfully", data: data })
        }
    } catch (error) {
        // console.log(error);
        res.status(500).send({ result: "Fail", message: "Internel Server Error..." })
    }
}

module.exports = [createImage, getImages, updateImages, deleteImage, getSingleImage, increaseViews, adminpass]