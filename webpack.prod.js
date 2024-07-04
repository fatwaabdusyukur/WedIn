const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

const config = {
  mode: "production",
  devtool: "source-map",
  output: {
    path: resolve(__dirname, "/dist"),
    filename: "js/[name].[hash].js",
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
              publicPath: "../img",
              name: "[name].[hash].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "src/frontend/public/index.html"),
      filename: "index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
  ],
};

module.exports = merge(common, config);
