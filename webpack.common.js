const path = require("path");

module.exports = {
  entry: "./src/index.jsx",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        include: [path.resolve(__dirname, "src/")],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
        include: [path.resolve(__dirname, "src/")],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: "asset/resource",
        include: [path.resolve(__dirname, "src/")],
        exclude: /node_modules/,
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
  resolve: {
    extensions: [".jsx", ".js"],
  },
};
