const express = require("express")
const router = require("./router/routeIndex")
const app = express()
const cors = require("cors")
require('dotenv').config();

app.use(cors())

app.use(express.json())

// app.use(express.json({limit: '7000mb'}))
// app.use(express.urlencoded({ limit: '7000mb', extended: true }));

require("./dbConnect")
const path = require("path")
const { copyFileSync } = require("fs")

// app.use(express.static("public"))
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "build")));            // import during connecting with frontend.

app.use("/api", router);
app.use('*', express.static(path.join(__dirname, "build")));   // import during connecting with frontend.

const port = process.env.PORT || 8008
app.listen(port, () => console.log(`Server is running...`))