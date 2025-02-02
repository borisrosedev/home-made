// eslint.config.js

import eslintConfigPrettier from "eslint-config-prettier";
export default [
  eslintConfigPrettier,
  {
    rules: {
      semi: "error",
      "prefer-const": "error"
    }
  }
];
