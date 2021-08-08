require("json5/lib/register");
const express = require("express");
const bodyParser = require("body-parser");
const config = require("../eco.config.json");
const app = express();
const PORT = config.port.eco_express;

const router = express.Router(); // Express router

router.get("/", function (req, res) {
    res.send("Hello World!");
});

app.use(bodyParser.json());  //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/", router);
app.use("/user", require("./user/index.js"));
app.use("/server", require("./server/index.js"));

app.listen(PORT, () => {
    console.log(`\n   ⚡ EcoExpress is running at http://localhost:${PORT}`);
});
