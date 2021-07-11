const express = require("express")
const config = require("../eco.config.js")

const path = require('path');

const app = express();
const PORT = config.port.eco_express;

const router = require('express').Router(); // Express router

router.get('/', function (req, res) {
    res.send("Hello World!");
});

app.use('/', router);

app.listen(PORT, () => {
    console.log(`⚡ [server]: Server is running at http://127.0.0.1:${PORT}`);
});