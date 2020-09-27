const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const helpers = require("./helpers");

module.exports = {
  context: helpers.resolveFromRootPath("src"),
  resolve: {
    alias: {
      "common-app": helpers.resolveFromRootPath("src/common-app"),
      common: helpers.resolveFromRootPath("src/common"),
      layouts: helpers.resolveFromRootPath("src/layouts"),
      core: helpers.resolveFromRootPath("src/core"),
      scenes: helpers.resolveFromRootPath("src/scenes"),
      pods: helpers.resolveFromRootPath("src/pods"),
    },
    extensions: [".js", ".ts", ".tsx"],
  },
  entry: {
    app: ["regenerator-runtime/runtime", "./index.tsx"],
  },
  output: {
    filename: "[name].[chunkhash].js",
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(png|jpg)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/images",
            },
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
            },
          },
        ],
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
    }),
  ],
};
