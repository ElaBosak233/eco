/**
 * 用户模块
 * @author: ElaBosak233
 * @since: 2021/8/16
 */

const express = require("express");
const secretUtil = require("../utils/secret");
const router = express.Router();
const token = require("../utils/token");
const auth = require("../utils/auth");

/*
用户登录
POST "/api/user/login"
body {username, passwd}
return {stauts}
 */
router.post("/login", (req, res) => {
  auth.needntAuth(req, res, () => {
    global.db.get(
      "SELECT * FROM users WHERE username=$username",
      { $username: req.body["username"] },
      (err, row) => {
        if (row === undefined) {
          res.send({
            stauts: "non-existent",
          });
        } else if (
          row["passwd"] ===
          secretUtil.encryptWithSHA256AndSalt(
            req.body["passwd"],
            req.body["username"]
          )
        ) {
          req.session["token"] =
            req.body["username"] + "_" + token.randomToken();
          global.log4js["ecoInterface"].info(
            "登录者 " +
              req.body["username"] +
              " 请求已通过，Token 已生成 " +
              req.session["token"]
          );
          res.send({
            stauts: "success",
          });
        } else {
          res.send({
            stauts: "error",
          });
        }
      }
    );
  });
});

/*
用户登出
GET "/api/user/logout"
 */
router.get("/logout", (req, res) => {
  auth.needAuth(req, res, () => {
    req.session["token"] = null;
    res.send({
      stauts: "success",
    });
  });
});

module.exports = router;
