const config = require("./webpack.config");

module.exports = {
  ...config,
  output: {
    ...config.output,
    filename: "socket.io.min.js",
  },
  mode: "production",
  devtool: "inline-source-map",
  module: {
    rules: [
      ...config.module.rules,
      {
        test: /\.js$/,
        loader: "webpack-remove-debug",
      },
    ],
  },
};
