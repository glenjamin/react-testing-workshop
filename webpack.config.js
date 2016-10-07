const path = require("path");

const webpack = require("webpack");

module.exports = {
  entry: {
    main: [
      "./client/index.js",
      "webpack-hot-middleware/client"
    ],
    devboard: [
      "./client/devboard/index.js",
      "webpack-hot-middleware/client?reload=true"
    ]
  },
  devtool: "eval-source-map",
  output: {
    path: path.join(__dirname, "public", "dist"),
    publicPath: "/dist/",
    filename: "[name].bundle.js"
  },
  resolve: {
    modulesDirectories: ["node_modules"],
    extensions: ["", ".js"]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: "babel"
      },
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.css$/,
        loader: "style!css"
      }
    ]
  },
  plugins: [
    // consistent build hashes
    new webpack.optimize.OccurrenceOrderPlugin(),

    // hot module replacement
    new webpack.HotModuleReplacementPlugin(),

    // Don't emit broken bundles
    new webpack.NoErrorsPlugin()
  ]
};
