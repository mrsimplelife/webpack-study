const path = require("path");
const webpack = require("webpack");
const MyWebpackPlugin = require("./my-webpack-plugin");
const childProcess = require("child_process");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: {
    // main: "./src/app.js",
    main: "./app.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // use: [path.resolve("./my-webpack-loader.js")],
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV === "production"
            ? MiniCssExtractPlugin.loader
            : "style-loader",
          // MiniCssExtractPlugin.loader,
          "css-loader",
        ],
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
        test: /\.(png|jpg|gif|svg)$/,
        loader: "url-loader",
        options: {
          // publicPath: "./dist/",
          name: "[name].[ext]?[hash]",
          limit: 20000,
        },
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `
      Build data: ${new Date().toLocaleString()}
      Commit Version: ${childProcess.execSync("git rev-parse --short HEAD")}
      Author: ${childProcess.execSync("git config user.name")}
      `,
    }),
    new webpack.DefinePlugin({
      TWO: "1+1",
      TWOSTRING: JSON.stringify("1+1"),
      "api.domain": JSON.stringify("http://example.com"),
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      templateParameters: {
        env: process.env.NODE_ENV === "development" ? "(개발용)" : "",
      },

      minify:
        // false,
        // {
        //   collapseWhitespace: true,
        //   removeComments: true,
        // },
        process.env.NODE_ENV === "production"
          ? {
              collapseWhitespace: true,
              removeComments: true,
            }
          : false,
    }),
    new CleanWebpackPlugin(),
    // new MiniCssExtractPlugin({ filename: "[name].css" }),
    ...(process.env.NODE_ENV === "production"
      ? [new MiniCssExtractPlugin({ filename: "[name].css" })]
      : []),
  ],
};
