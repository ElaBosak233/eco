/**
 * 用户认证模块
 * @author: ElaBosak233
 * @since: 2021/8/16
 */

require("json5/lib/register");
const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
    const users = require("#data/user/user.json5");
    const secretUtil = require("../utils/secret");
    for (let item in users) {
        if (users[item]["passwd"] === secretUtil.encryptWithSHA256AndSalt(req.body["passwd"], req.body["username"])) {
            req.session["username"] = req.body["username"];
            req.session["token"] = req.body["username"] + "_" + require("../utils/token").randomToken();
            global.log4js["eco"].info("登录者 " + req.session["username"] + " 请求已通过，Token 已生成 " + req.session["token"]);
            res.send({
                stauts: "success"
            });
        }
    }
});

router.get("logout", (req, res) => {

});

module.exports = router;
