require("json5/lib/register");
const express = require("express");
const config = require("../eco.config.json5");
const app = express();
const PORT = config.port.eco_express;

const router = express.Router(); // Express router

router.get("/", function (req, res) {
    res.send("Hello World!");
});

app.use("/", router);
app.use("/user", require("./user/index.js"));

app.listen(PORT, () => {
    console.log(`\n   ⚡ EcoExpress is running at http://localhost:${PORT}`);
});
