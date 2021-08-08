require("json5/lib/register");
const json5 = require("json5");
const users = require("../_data/user/user.json5");
const fs = require("fs");
const user = require("express").Router();
const secret = require("../util/secret.js");

user.get("/", function(req, res) {
    res.send("hello");
});

user.post("/create", function (req, res) {
    try {
        if (users.length === 0) {
            pushUser(req, res);
        } else {
            users.forEach((item) => {
                if (req.body.name !== item.name) {
                    pushUser(req, res);
                } else {
                    res.send("error");
                }
            });
        }
    } catch (err) {
        res.writeHead(503, "User creation failed", {"content-type" : "text/plain"});
        res.send("error");
        console.error(err);
    }
});

user.post("/login", function (req, res) {
    console.log("接收登录请求来自"+req.body.name);
    users.forEach(function (item) {
        if (req.body.name === item.name) {
            if (secret.encryptWithSHA256AndSalt(req.body.passwd, item.name) === item.apiKey) {
                res.send({
                    code: 200,
                    token: item.apiKey
                });
                console.log("数据已返回，200");
            } else {
                res.send({
                    code: 403
                });
                console.log("数据已返回，403");
            }
        } else {
            res.send({
                code: 403
            });
            console.log("无匹配");
        }
    });
});

function pushUser(req, res) {
    users.push({
        "id": users.length+1,
        "name": req.body.name,
        "email": req.body.email,
        "apiKey": secret.encryptWithSHA256AndSalt(req.body.passwd, req.body.name),
        "permission": require("../_data/user/permission-prefab.json5").defaultUser
    });
    const fs = require("fs");
    fs.writeFile("./api/_data/user/user.json5", json5.stringify(users), function(err) {
        if (err) {
            console.log(err);
        }
    });
    res.send({
        code: 200
    });
}

module.exports = user;
