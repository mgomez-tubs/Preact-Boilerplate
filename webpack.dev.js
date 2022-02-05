const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval",
  output: {
    // No need to specify path, since we are using devServer
    // Leaving the names equal for consistency
    // The served files can be found at http://localhost:8080/webpack-dev-server (set your port if necessary)
    filename: "[name].bundle.js",
    assetModuleFilename: "images/[hash][ext][query]",
  },
  plugins: [],
  devServer: {
    hot: true,
    client: {
      logging: "warn",
    },
  },
  optimization: {
    runtimeChunk: true,
    usedExports: true,
    removeEmptyChunks: false,
  },
});
