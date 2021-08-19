const express = require("express");
const router = express.Router();
const fs = require("fs");
const ejs = require("ejs");
const path = require("path");

/*
登录视图
 */
router.get("/login", (req, res) => {
  global.ecoInterface.auth.notAuth(req, res, () => {
    res.render("ecoPrefabs/login", {
      register: require("#config").openRegistration,
    });
  });
});

/*
注册视图
 */
if (require("#config").openRegistration) {
  router.get("/register", (req, res) => {
    global.ecoInterface.auth.notAuth(req, res, () => {
      res.render("ecoPrefabs/login", {
        register: require("#config").openRegistration,
      });
    });
  });
}

/*
概览
 */
router.get("/", (req, res) => {
  global.ecoInterface.auth.needAuth(req, res, () => {
    res.render("ecoPrefabs/dashboard", {
      title: "概览",
      router: "/",
      barItems: global.barItems,
      ctx: ejs.render(
        fs.readFileSync(path.join(__dirname, "./views/index.ejs"), "utf8")
      ),
    });
  });
});

/*
服务器
 */
router.get("/server", (req, res) => {
  global.ecoInterface.auth.needAuth(req, res, () => {
    res.render("ecoPrefabs/dashboard", {
      title: "服务器",
      router: "/server",
      barItems: global.barItems,
      ctx: ejs.render(
        fs.readFileSync(path.join(__dirname, "./views/server.ejs"), "utf8")
      ),
    });
  });
});

module.exports = router;
