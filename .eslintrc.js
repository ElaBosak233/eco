const process = require("eslint-plugin-vue/lib/configs/base");
module.exports = {
    parser: 'vue-eslint-parser', // 解析 .vue 文件
    extends: [
        'plugin:vue/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    plugins: ['@typescript-eslint'],
    parserOptions: {
        parser: '@typescript-eslint/parser' // 解析 .ts 文件
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'array-bracket-spacing': 2,
        "semi": 2,
        "quotes": [2, "double"],
        'no-var': 2,
        'no-eval': 2,
        '@typescript-eslint/camelcase': 0, // 目前埋点有部分字段无法更换
        '@typescript-eslint/no-non-null-assertion': 0, // 允许非空断言运算符
        '@typescript-eslint/member-delimiter-style': [
            2,
            {
                multiline: {
                    delimiter: 'none',
                    requireLast: true,
                },
                singleline: {
                    delimiter: 'semi',
                    requireLast: false,
                },
            },
        ],
        '@typescript-eslint/no-unused-vars': [0, { args: 'none' }],
        '@typescript-eslint/interface-name-prefix': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-use-before-define': 0,
        '@typescript-eslint/no-explicit-any': 0
    }
}

