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

require("json5/lib/register");
const config = require("./eco.config.json");
const exec = require("child_process").exec;

const vite = exec("vite ./view --port " + config.port.eco_vite, {});
vite.stdout.on("data", function(data) {
    console.log("[·EcoVite]\n" + data);
});
vite.stderr.on("data", function(data) {
    console.error("[×EcoVite]\n" + data);
});

const express = exec("node ./api/index.js", {});
express.stdout.on("data", function(data) {
    console.log("[·EcoExpress]\n" + data);
});
express.stderr.on("data", function(data) {
    console.error("[×EcoExpress]\n" + data);
});

const fs = require("fs");
if(!fs.existsSync(config.server.cwd)) {
    fs.mkdir(config.server.cwd, function(err) {
        if (err) {
            console.error("初始化服务器工作目录异常，请检查 eco.config.json5 中 server.cwd 选项是否为空或非法路径");
            return console.error(err);
        }
    });
    fs.writeFile(config.server.cwd+"/readme.txt", "本目录已被 eco 接管，请不要随意对目录进行有关文件系统的操作！" ,function(err) {
        if (err) {
            return console.error(err);
        }
    });
    console.log("服务器工作目录初始化成功");
}
