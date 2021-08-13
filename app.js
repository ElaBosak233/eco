const config = require("./eco.config");
const express = require("express");
const path = require("path");
const session = require("express-session");
const log4js = require("log4js");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();

/*
设置日志系统 log4js
 */
log4js.configure({
    appenders: {
        fileout: { type: "file", filename: "logs/ecoFileOut.log" },
        datafileout: {
            type: "dateFile",
            filename: "logs/ecoDataFileOut.log",
            pattern: ".yyyy-MM-dd-hh-mm-ss-SSS"
        },
        consoleout: { type: "console" },
    },
    categories: {
        default: { appenders: ["fileout", "consoleout"], level: "debug" },
        anything: { appenders: ["consoleout"], level: "debug" }
    }
});

global.log4js = {
    eco: log4js.getLogger("eco")
};

/*
设置模板引擎 Ejs 和静态文件目录
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

/*
设置 Session
 */
app.use(session({
    secret: 'ecoFramework',
    resave: false,
    saveUninitialized: true,
    rolling: true,
    cookie: {
        maxAge: 5000
    }
}));

/*
设置 bodyParser
 */
app.use(bodyParser.json());  //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({
    extended: true
}));

/*
设置工作路径
 */
global.cwd = __dirname;

/*
注册菜单
 */
global.menu_items = [];

/*
设置路由
 */
app.use("/", require("./routers/index.js"));
app.use("/api", require("./routers/api/index.js"));
fs.readdirSync(global.cwd + "/plugins").forEach(function (dir) {
    const pluginDir = "./plugins/" + dir + "/";
    if (require(pluginDir + "plugin.json")["type"] === "view") {
        app.use("/", require(pluginDir + require(pluginDir + "plugin.json")["main"]));
        require(pluginDir + "plugin.json")["menu_items"].forEach(function (item) {
            global.menu_items.push(item);
        });
    }
});

/*
启动 eco 服务
 */
const server = app.listen(config.port, () => {
    console.log(`
                                      __               
  ___  _________     _______  _______/ /____  ____ ___ 
 / _ \\/ ___/ __ \\   / ___/ / / / ___/ __/ _ \\/ __ \`__ \\
/  __/ /__/ /_/ /  (__  ) /_/ (__  ) /_/  __/ / / / / /
\\___/\\___/\\____/  /____/\\__, /____/\\__/\\___/_/ /_/ /_/ 
                       /____/                          
        Powered by @ElaBosak233, Made with L♥VE
         https://github.com/ElaBosak233/eco.git
`);
    global.log4js.eco.info(`eco 在端口 ${server.address().port} 上成功运行 ⚡`);
    global.log4js.eco.info(`预览地址 http://127.0.0.1:${server.address().port}`);
});

module.exports = app;
