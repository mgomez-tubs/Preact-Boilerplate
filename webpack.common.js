const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.jsx",
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: [path.resolve(__dirname, "src/")],
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        include: [path.resolve(__dirname, "src/")],
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
        include: [path.resolve(__dirname, "src/")],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: "asset/resource",
        include: [path.resolve(__dirname, "src/")],
      },
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, "src/")],
        loader: require.resolve("babel-loader"),
        options: {
          presets: [
            "@babel/preset-env",
            ["@babel/preset-react", { pragma: "h", pragmaFrag: "Fragment" }],
          ],
          plugins: [
            [
              // This ensures we don't have to import h in every .jsx file
              "babel-plugin-jsx-pragmatic",
              {
                module: "preact",
                import: "h",
                export: "h",
              },
            ],
          ],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Preact App",
      template: "src/index.html",
      inject: "body",
    }),
  ],
  resolve: {
    extensions: [".jsx", ".js"],
  },
};
