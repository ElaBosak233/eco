/**
 * 用户认证模块
 * @author: ElaBosak233
 * @since: 2021/8/16
 */

const express = require("express");
const secretUtil = require("../utils/secret");
const router = express.Router();

router.post("/login", (req, res) => {
    global.db.get("SELECT * FROM users WHERE username=$username",{ $username: req.body["username"] }, (err, row) => {
        if (row === undefined) {
            res.send({
                stauts: "non-existent"
            });
        } else if (row["passwd"] === secretUtil.encryptWithSHA256AndSalt(req.body["passwd"], req.body["username"])) {
            req.session["username"] = req.body["username"];
            req.session["token"] = req.body["username"] + "_" + require("../utils/token").randomToken();
            global.log4js["ecoInterface"].info("登录者 " + req.session["username"] + " 请求已通过，Token 已生成 " + req.session["token"]);
            res.send({
                stauts: "success"
            });
        } else {
            res.send({
                stauts: "error"
            });
        }
    });
});

router.get("logout", (req, res) => {

});

module.exports = router;
