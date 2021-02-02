module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["@aussiegeek/eslint-config-react"],
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
    ecmaVersion: 2018,
    sourceType: "module",
  },
};
