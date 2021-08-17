const config = require("./eco.config");
const express = require("express");
const path = require("path");
const session = require("express-session");
const log4js = require("log4js");
const bodyParser = require("body-parser");
const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();

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
    eco: log4js.getLogger("eco"),
    sqlite: log4js.getLogger("sqlite")
};

/*
设置模板引擎 Ejs 和静态文件目录
 */
app.set("views", path.join(__dirname, "prefabs"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "assets")));

/*
设置 Session
 */
app.use(session({
    secret: "ecoFramework",
    resave: false,
    saveUninitialized: true,
    rolling: true,
    cookie: {
        maxAge: 1000 * 60 * 30 // session 过期时间，如果在这段时间内用户没有操作，那么他就会被登出
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
注册数据库
 */
global.db = new sqlite3.Database(require("#config").db.name);
// 用户数据库
global.db.serialize(() => {
    const sql = `
        CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, email TEXT, username TEXT NOT NULL UNIQUE, passwd TEXT NOT NULL, permissions BLOB);
    `;
    global.db.run(sql);
});

/**
 * 加载插件
 */
global.log4js.eco.info("正在获取插件...");
fs.readdirSync(global.cwd + "/plugins").forEach((dir) => {
    const pluginDir = "./plugins/" + dir + "/";
    /*
    预制体插件
     */
    if (require(pluginDir + "plugin.json")["type"] === "prefab") {
        const name = require(pluginDir + "plugin.json")["name"];
        if (!fs.existsSync("./prefabs/" + name)) {
            fs.mkdirSync("./prefabs/" + name);
        }
        fs.readdirSync(pluginDir).forEach((item) => {
            if (item.match(".ejs")) {
                fs.copyFileSync(pluginDir + item, "./prefabs/" + name + "/" + item);
            }
        });
        global.log4js["eco"].info("预制体插件: " + name + " 已载入 ecoFramework");
    }
    /*
    视图类插件，主程序需要暴露路由 express.Router();
     */
    if (require(pluginDir + "plugin.json")["type"] === "view") {
        const name = require(pluginDir + "plugin.json")["name"];
        app.use("/", require(pluginDir + require(pluginDir + "plugin.json")["main"]));
        require(pluginDir + "plugin.json")["menu_items"].forEach((item) => {
            global.menu_items.push(item);
        });
        global.log4js["eco"].info("视图类插件: " + name + " 已载入 ecoFramework");
    }
    /*
    接口类插件，主程序需要暴露路由 express.Router();
     */
    if (require(pluginDir + "plugin.json")["type"] === "api") {
        const name = require(pluginDir + "plugin.json")["name"];
        app.use("/api", require(pluginDir + require(pluginDir + "plugin.json")["main"]));
        global.log4js["eco"].info("接口类插件: " + name + " 已载入 ecoFramework");
    }
});

/*
启动 ecoFramework 服务
 */
const server = app.listen(config.port, () => {
    console.log(`
                   ___________                                                __    
  ____   ____  ____\\_   _____/___________    _____   ______  _  _____________|  | __
_/ __ \\_/ ___\\/  _ \\|    __) \\_  __ \\__  \\  /     \\_/ __ \\ \\/ \\/ /  _ \\_  __ \\  |/ /
\\  ___/\\  \\__(  <_> )     \\   |  | \\// __ \\|  Y Y  \\  ___/\\     (  <_> )  | \\/    < 
 \\___  >\\___  >____/\\___  /   |__|  (____  /__|_|  /\\___  >\\/\\_/ \\____/|__|  |__|_ \\
     \\/     \\/          \\/               \\/      \\/     \\/                        \\/
                        Powered by @ElaBosak233, Made with L♥VE
                         https://github.com/ElaBosak233/eco.git
`);
    global.log4js.eco.info(`eco 在端口 ${server.address()["port"]} 上成功运行 ⚡`);
    global.log4js.eco.info(`预览地址 http://127.0.0.1:${server.address()["port"]}`);
});

module.exports = app;
