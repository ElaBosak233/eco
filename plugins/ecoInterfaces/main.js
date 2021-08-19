/**
 * ecoInterface 主程序
 * @author: ElaBosak233
 * @since: 2021/8/15
 */

const express = require("express");
const router = express.Router();
const log4js = require("log4js");

global.log4js["ecoInterface"] = log4js.getLogger("ecoInterface");

/*
注册鉴权函数
 */
global.ecoInterface = {};
global.ecoInterface.auth = {};
global.ecoInterface.auth.needAuth = function needAuth(req, res, callback) {
  if (req.session["token"]) {
    if (typeof callback === "function") {
      callback();
    }
  } else {
    res.redirect("/login");
  }
};
global.ecoInterface.auth.notAuth = function notAuth(req, res, callback) {
  if (req.session["token"]) {
    res.redirect("back" || "/");
  } else {
    callback();
  }
};

router.get("/", (req, res) => {
  res.send(`
    <h1>It works!</h1>
    <p>It seems that <strong>ecoInterfaces</strong> of ecoFramework has been started successfully.</p>
    `);
});

router.get("/hello", (req, res) => {
  res.send("hello");
});

router.use("/user", require("./modules/user"));

module.exports = router;
