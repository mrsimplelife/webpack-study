const path = require("path");
module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [path.resolve("./my-webpack-loader.js")],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // {
      //   test: /\.png$/,
      //   loader: "file-loader",
      //   options: {
      //     publicPath: "./dist/",
      //     name: "[name].[ext]?[hash]",
      //   },
      // },
      // {
      //   test: /\.(png||jpg|gif||svg)$/,
      //   loader: "file-loader",
      //   options: {
      //     publicPath: "./dist/",
      //     name: "[name].[ext]?[hash]",
      //   },
      // },
      {
        test: /\.(png||jpg|gif||svg)$/,
        loader: "url-loader",
        options: {
          publicPath: "./dist/",
          name: "[name].[ext]?[hash]",
          limit: 20000,
        },
      },
    ],
  },
};
