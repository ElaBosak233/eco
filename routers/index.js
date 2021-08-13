const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
    if (req.session["username"]) {
        res.redirect("back" || "/");
    } else {
        res.render("login");
    }
});

router.post("/login", (req, res) => {
    req.session["username"] = req.body.username;
    res.send({
        stauts: "success"
    });
});

module.exports = router;
