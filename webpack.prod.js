const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build"),
    assetModuleFilename: "images/[hash][ext][query]",
    clean: true,
    pathinfo: false,
  },
  plugins: [],
  optimization: {
    sideEffects: true,
    usedExports: true,
    minimize: true,
  },
});
