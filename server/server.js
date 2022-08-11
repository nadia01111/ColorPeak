// "use strict";

const express = require("express");
const morgan = require("morgan");
const PORT = 8000;

const {
    getRandomePalette,
    validation,
    getUserById,
    uploadPicture
} = require("./handlers");

const {colorRecognize,
    test} = require("./googleVisionApI")


express()
.use(morgan("tiny"))
.use(express.json())
.use(express.static("public"))

/* Endpoints */
.get("/api/randome-palette", getRandomePalette)
.get("/api/users/:id", getUserById)

.get("/api/test", test)
.post("/api/color-recognize",colorRecognize)
.post("/api/upload/picture",uploadPicture)

// catch-all
.get("*", (req, res) => {
return res.status(404).json({ status: 404, message: "No endpoint found." })
})

.listen(PORT, () => console.log(`Listening on port ${PORT}`));
