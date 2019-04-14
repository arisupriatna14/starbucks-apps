module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "node": true,
    "es6": true,
    "jest": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module",
  },
  "globals": {
    "lang": true
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "react/forbid-prop-types": 2,
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "no-extra-boolean-cast": 0,
    "no-control-regex": 0,
    "no-underscore-dangle": 0,
    "react/no-array-index-key": [
      0
    ],
    "max-len": [
      "error",
      {
        "code": 120,
        "ignoreComments": true
      }
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": true
      }
    ],
    "import/no-named-as-default": "off",
    "import/prefer-default-export": "off",
    "indent": "error",
    "indent-legacy": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "prefer-destructuring": 1,
    "no-else-return": 0,
    "react/require-default-props": 0,
    "react/no-string-refs": 0,
    "react/jsx-max-props-per-line": [2, { "maximum": 2, "when": "multiline" }],
    "no-unused-vars": ["error", { "args": "none" }],
    "key-spacing": ["error", { "mode": "minimum" }],
    "arrow-body-style": [
      0,
      "as-needed", { "requireReturnForObjectLiteral": true }
    ],
    "comma-dangle": ["error", "never"],
    "react/jsx-no-bind": [
      "error",
      {
        "ignoreRefs": true,
        "allowArrowFunctions": false,
        "allowBind": false
      }
    ],
    "react/jsx-wrap-multilines": 0,
    "no-multi-spaces": ["error", { "ignoreEOLComments": true }],
    "padded-blocks": 0,
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "global-require": 0
  },
  "overrides": [
    {
      "files": [ "app/i18n/locales/*.js" ],
      "rules": {
        "max-len": [0, {}]
      }
    }
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".android.js",
          ".ios.js"
        ]
      }
    }
  },
  "extends": ["airbnb", "eslint:recommended"]
};
