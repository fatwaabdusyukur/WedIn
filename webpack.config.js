const { resolve, dirname } = require("path");
const { argv } = require("process");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const isProduction = argv[3] === "production";

const fileExtensions = [
  "jpg",
  "jpeg",
  "png",
  "gif",
  "eot",
  "otf",
  "svg",
  "ttf",
  "woff",
  "woff2",
];

const plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: resolve(__dirname, "src/frontend/index.html"),
    filename: "index.html",
  }),
  new CopyPlugin({
    patterns: [
      {
        from: resolve(__dirname, "src/frontend/assets/img/jumbotron.jpg"),
        to: "img/jumbotron.jpg",
      },
    ],
  }),
];

module.exports = {
  mode: isProduction ? "production" : "development",
  devtool: isProduction ? "source-map" : "cheap-module-source-map",
  entry: {
    main: resolve(__dirname, "src/frontend/index.js"),
  },
  output: {
    path: resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
          {
            loader: "source-map-loader",
          },
        ],
        exclude: /node_modules/,
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
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: new RegExp(`.(${fileExtensions.join("|")})$`),
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
    ],
  },
  plugins: plugins,
  resolve: {
    alias: {
      "@frontend": resolve(__dirname, "src/frontend"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  devServer: {
    compress: true,
    port: 4000,
    historyApiFallback: true,
  },
};
