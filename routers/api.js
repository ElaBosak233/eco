const express = require("express");
const router = express.Router();

router.get("/", ((req, res) => {
    res.send(
        `
        <h1>It works!</h1>
        <p>ecoFramework 接口服务已开启</p>
        `
    );
}));

module.exports = router;
