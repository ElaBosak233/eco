/*
 * =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
 * eco system
 * =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
 */
console.log(`
                                      __               
  ___  _________     _______  _______/ /____  ____ ___ 
 / _ \\/ ___/ __ \\   / ___/ / / / ___/ __/ _ \\/ __ \`__ \\
/  __/ /__/ /_/ /  (__  ) /_/ (__  ) /_/  __/ / / / / /
\\___/\\___/\\____/  /____/\\__, /____/\\__/\\___/_/ /_/ /_/ 
                       /____/                          
        Powered by @ElaBosak233, Made with L♥VE
         https://github.com/ElaBosak233/eco.git
`)

const config = require("./eco.config.js");
const exec = require("child_process").exec;

const vite = exec("vite --port " + config.port.eco_vite, {});
vite.stdout.on("data", function(data) {
    console.log("[·EcoVite]\n" + data);
})
vite.stderr.on("data", function(data) {
    console.error("[×EcoVite]\n" + data);
})

const express = exec("node ./api/index.js", {});
express.stdout.on("data", function(data) {
    console.log("[·EcoExpress]\n" + data);
})
express.stderr.on("data", function(data) {
    console.error("[×EcoExpress]\n" + data);
})