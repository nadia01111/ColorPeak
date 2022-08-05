const express = require("express");
const morgan = require("morgan");
const PORT = 8000;

express()
.use(morgan("tiny"))
.use(express.json())


/* Endpoints */

// homepage
.get("/", (req, res) => {
    return res.status(404).json({ status: 404, message: "Homepage." })
    })

// catch-all
.get("*", (req, res) => {
return res.status(404).json({ status: 404, message: "No endpoint found." })
})

.listen(PORT, () => console.log(`Listening on port ${PORT}`));
