const process = require("eslint-plugin-vue/lib/configs/base");
module.exports = {
    parser: "vue-eslint-parser", // 解析 .vue 文件
    extends: [
        "plugin:vue/recommended",
    ],
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "array-bracket-spacing": 2,
        "semi": 2,
        "quotes": [2, "double"],
        "no-var": 2,
        "no-eval": 2
    }
};

