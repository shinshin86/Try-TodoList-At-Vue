module.exports = {
    "env": {
        "browser": true,
        "amd": true,
        "es6": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:vue/recommended",
      "plugin:prettier/recommended"
    ],
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "prettier/prettier": [
            "error", {
                "singleQuote": true,
                "semi": false
            },
        ]
    }
};
