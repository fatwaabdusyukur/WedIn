const { resolve } = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: resolve(__dirname, "src/frontend/app/index.js"),
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
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: resolve(__dirname, "src/frontend/public"),
          globOptions: {
            ignore: ["**/index.html"],
          },
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@app": resolve(__dirname, "src/frontend/app"),
      "@public": resolve(__dirname, "src/frontend/public"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
};
