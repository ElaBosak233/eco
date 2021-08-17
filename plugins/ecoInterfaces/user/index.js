const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("user");
});

router.use("/", require("./session"));

module.exports = router;
