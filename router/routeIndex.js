const router = new require("express").Router()
const media = require("./media")
const imageRouter = require("./imageRouter")
const addRouter = require("./addRouter")

router.use("/v1/media", media)
router.use("/image", imageRouter)
router.use("/add", addRouter)

module.exports = router