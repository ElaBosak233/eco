const server = require("express").Router();

server.get("/", function(req, res) {
    res.send("hello");
});

server.post("/create", function(req, res) {
    const apiKey = req.query.apiKey;
});

module.exports = server;
