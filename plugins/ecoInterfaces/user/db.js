require("json5/lib/register");
const express = require("express");
const router = express.Router();

router.post("/add", (req, res) => {

});

router.delete("/remove", (req, res) => {

});

router.put("/update", (req, res) => {

});

router.get("/get/:username", (req, res) => {

});

router.get("/getAll", (req, res) => {
    const users = require("#data/user/user.json5");
    res.send(users);
});

module.exports = router;
