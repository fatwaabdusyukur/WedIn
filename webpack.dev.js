const { resolve } = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

const config = {
  mode: "development",
  devtool: "cheap-module-source-map",
  output: {
    path: resolve(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "img",
              name: "[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "src/frontend/public/index.html"),
      filename: "index.html",
    }),
  ],
  devServer: {
    port: 4000,
    open: true,
    compress: true,
    hot: true,
    historyApiFallback: true,
  },
};

module.exports = merge(common, config);
