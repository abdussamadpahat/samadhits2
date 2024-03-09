const router = require("express").Router()
const [createImage, getImages, updateImages, deleteImage, getSingleImage, increaseViews, adminpass] = require("../controllers/imageController")
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

router.post("/", upload.single("pic"), createImage)
router.get("/", getImages)
router.get("/:_id", getSingleImage)
router.put("/:_id", updateImages)
router.delete("/:_id", deleteImage)
router.put("/views/:_id", increaseViews)
router.get("/getallmovies/:_id", adminpass)

module.exports = router