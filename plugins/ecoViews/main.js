const express = require("express");
const router = express.Router();
const fs = require("fs");
const ejs = require("ejs");
const path = require("path");


/*
登录视图
 */
router.get("/login", (req, res) => {
    if (req.session["username"] && req.session["token"]) {
        res.redirect("back" || "/");
    } else {
        res.render("login", {
            register: require("#config").openRegistration
        });
    }
});

/*
注册视图
 */
if (require("#config").openRegistration) {
    router.get("/register", (req, res) => {
        if (req.session["username"] && req.session["token"]) {
            res.redirect("back" || "/");
        } else {
            res.render("login", {
                register: require("#config").openRegistration
            });
        }
    });
}

/*
概览
 */
router.get("/", (req, res) => {
    if (req.session["username"]) {
        const file = fs.readFileSync(path.join(__dirname, "./index.ejs"), "utf8");
        res.render("prefabs/ecoPrefabs/dashboard", {
            router: "/",
            ctx: ejs.render(file),
            items: global.menu_items
        });
    } else {
        res.redirect("/login");
    }
});

module.exports = router;
