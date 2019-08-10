// module.exports = {
//   "plugins": ["jest"]
//   "extends": [
//     "airbnb",
//     "plugin:prettier/recommended",
//     "prettier/react"
//   ],
//   "env": {
//     "browser": true,
//     "commonjs": true,
//     "es6": true,
//     "jest": true,
//     "node": true,
//     "jest/globals": true
//   },
//   "rules": {
//     "jsx-a11y/href-no-hash": ["off"],
//     "react/jsx-filename-extension": ["warn", { "extensions": [".js", ".jsx"] }],
//     "max-len": [
//       "warn",
//       {
//         "code": 80,
//         "tabWidth": 2,
//         "comments": 80,
//         "ignoreComments": false,
//         "ignoreTrailingComments": true,
//         "ignoreUrls": true,
//         "ignoreStrings": true,
//         "ignoreTemplateLiterals": true,
//         "ignoreRegExpLiterals": true
//       }
//     ],
//     "jest/no-disabled-tests": "warn",
//     "jest/no-focused-tests": "error",
//     "jest/no-identical-title": "error",
//     "jest/prefer-to-have-length": "warn",
//     "jest/valid-expect": "error"
//   }
// }

/*
.eslintrc.js
*/
const ERROR = 2;
const WARN = 1;

module.exports = {
  extends: "eslint:recommended",
  env: {
    es6: true
  },
  overrides: [
    {
      files: [
        "**/*.test.js"
      ],
      env: {
        jest: true // now **/*.test.js files' env has both es6 *and* jest
      },
      // Can't extend in overrides: https://github.com/eslint/eslint/issues/8813
      // "extends": ["plugin:jest/recommended"]
      plugins: ["jest"],
      rules: {
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error"
      }
    }
  ],
};