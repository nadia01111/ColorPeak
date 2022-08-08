const express = require("express");
const morgan = require("morgan");
const PORT = 8000;

const {
    getRandomePalette,
} = require("./handlers");


express()
.use(morgan("tiny"))
.use(express.json())
.use(express.static("public"))

/* Endpoints */
.get("/api/randome-palette", getRandomePalette)


// catch-all
.get("*", (req, res) => {
return res.status(404).json({ status: 404, message: "No endpoint found." })
})

.listen(PORT, () => console.log(`Listening on port ${PORT}`));
