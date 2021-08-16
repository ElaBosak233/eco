require("json5/lib/register");
const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
    const users = require("#data/user/user.json5");
    const secretUtil = require("../utils/secret");
    for (let item in users) {
        if (users[item].passwd === secretUtil.encryptWithSHA256AndSalt(req.body["passwd"], req.body["username"])) {
            req.session["username"] = req.body["username"];
            req.session["token"] = req.body["username"] + "_" + require("../utils/token").randomToken();
            res.send({
                stauts: "success"
            });
        }
    }
});

router.get("logout", (req, res) => {

});

module.exports = router;
