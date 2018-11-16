const {
  webpackConfig,
  reactRule,
  svgRule
} = require("./../../config/webpack.config");
const path = require("path");

webpackConfig.output.path = path.resolve(__dirname, "dist");
webpackConfig.module.rules.push(
  reactRule(path.resolve(__dirname, "./../../components"))
);

module.exports = webpackConfig;
