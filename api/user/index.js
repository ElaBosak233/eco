const user = require("express").Router();

user.get("/", function(req, res) {
    res.send("hello");
});

module.exports = user;
