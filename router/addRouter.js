const router = require("express").Router()
const [updateAdd, getAdd] = require("../controllers/addController")
const multer = require("multer")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({ storage: storage })

router.put("/", upload.single("pic"), updateAdd)
router.get("/", getAdd)

// router.put("/:_id", updateAdd)

module.exports = router