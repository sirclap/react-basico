const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const helpers = require("./helpers");
const Dotenv = require("dotenv-webpack");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  stats: "errors-only",
  plugins: [
    new Dotenv({
      path: helpers.resolveFromRootPath("config/env/dev.env"),
    }),
  ],
});
