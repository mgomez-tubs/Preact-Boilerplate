const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build"),
    assetModuleFilename: "images/[hash][ext][query]",
    clean: true,
    pathinfo: false,
  },
  plugins: [],
  devServer: {
    hot: true,
    client: {
      logging: "warn",
    },
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
  optimization: {
    runtimeChunk: true,
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
});
