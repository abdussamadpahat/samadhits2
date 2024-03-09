const add = require("../modals/addModal")
const fs = require("fs")

// async function createAdd(req, res) {
//     try {
//         let data1 = await add.findOne({_id})
//             if (data1[0].pic) {
//                 fs.unlinkSync("public/images/" + data1[0].pic)
//             }
//             await add.deleteOne({_id })




//         const data = new add(req.body)
//         if (req.file) {
//             data.pic = req.file.filename
//         }
//         await data.save()
//         res.send({ result: "Done", message: "Record created successfully", data: data })
//     } catch (error) {
//             res.status(500).send({ result: "Fail", message: "Internel Server error" })
//     }
// }
async function updateAdd(req, res) {
    try {
        let data = await add.findOne({ _id: "65a3aa4a2c1079477e44081d"})
            data.url = req.body.url

                if (data.pic) {
                    fs.unlinkSync("public/images/" + data.pic)
                }

            if (req.file) {
                data.pic = req.file.filename
            }
            else{
                data.pic = ""
            }

            await data.save()
        res.send({ result: "Done", message: "Updated Successfully!!!", data: data })
    } catch (error) {
            res.status(500).send({ result: "Fail", message: "Internel Server error" })
    }
}
async function getAdd(req, res) {
    try {
        const data = await add.find()
        if (data) {
            res.send({ result: "Done", message: "images getted successfully", items: data.length, data: data })
        }
    } catch (error) {
        // console.log(error);
        res.status(500).send({ result: "Fail", message: "Internel Server Error..." })
    }
}

module.exports = [updateAdd, getAdd]