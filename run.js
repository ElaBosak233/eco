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