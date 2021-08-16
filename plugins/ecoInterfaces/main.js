const express = require("express");
const router = express.Router();

router.get("/hello", (req, res) => {
    res.send("hello");
});

router.use("/user", require("./user"));

module.exports = router;
