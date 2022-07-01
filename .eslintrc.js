module.exports = {
    root: true,
    env: { "browser": true, "node": true, "es6": true, "jest/globals": true },
    parser: "@babel/eslint-parser", // uses babel-eslint transforms
    parserOptions: {
      requireConfigFile: false,
      babelOptions: {
        presets: ["@babel/preset-react"],
      },
    },
    settings: {
      "react": {
        "version": "detect",
      },
    },
    plugins: [
      "react",
      "react-hooks",
      "jest",
    ],
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
    ],
    ignorePatterns: ["*_pb.js", "*_pb.ts", "/src/components/Models/config.js"],
    rules: {
      "indent": ["error", 2, { "SwitchCase": 1, "ignoredNodes": ["TemplateLiteral"] }],
      "linebreak-style": ["error", "unix"],
      "no-trailing-spaces": ["error"],
      "quotes": ["error", "double"],
      "semi": ["error", "never"],
      "comma-dangle": ["error", "always-multiline"],
      // react
      "react/prop-types": 0,
      "react/display-name": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      // jest
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "error",
    },
    overrides: [
      {
        files: ["**/*.ts", "**/*.tsx"],
        parser: "@typescript-eslint/parser",
        plugins: ["@typescript-eslint"],
        extends: [
          "eslint:recommended",
          "plugin:@typescript-eslint/eslint-recommended",
        ],
        rules: {
          // fix eslint error on ts files when writing
          "indent": "off",
          "@typescript-eslint/indent": ["error", 2],
          // to do some nasty stuff with ts
          "@typescript-eslint/restrict-plus-operands": "off",
          "@typescript-eslint/no-floating-promises": "off",
          "@typescript-eslint/no-unsafe-argument": "off",
          "@typescript-eslint/no-unsafe-call": "off",
          "@typescript-eslint/no-unsafe-assignment": "off",
          "@typescript-eslint/no-unsafe-member-access": "off",
          "@typescript-eslint/no-unsafe-return": "off",
          "@typescript-eslint/no-explicit-any": 0,
          "@typescript-eslint/explicit-module-boundary-types": "off",
          "@typescript-eslint/no-empty-function": "off",
          "@typescript-eslint/no-var-requires": "off",
          "@typescript-eslint/no-inferrable-types": "off",
        },
      },
    ],
  }