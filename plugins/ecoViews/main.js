const express = require("express");
const router = express.Router();
const fs = require("fs");
const ejs = require("ejs");
const path = require("path");

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
