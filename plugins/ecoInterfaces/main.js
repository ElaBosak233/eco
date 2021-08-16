/**
 * ecoInterface 主程序
 * @author: ElaBosak233
 * @since: 2021/8/15
 */

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send(`
    <h1>It works!</h1>
    <p>It seems that <strong>ecoInterfaces</strong> of ecoFramework has been started successfully.</p>
    `);
})

router.get("/hello", (req, res) => {
    res.send("hello");
});

router.use("/user", require("./user"));

module.exports = router;
